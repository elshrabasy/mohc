from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
import fitz
import math
import tempfile
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
PUBLIC_DIR = BASE_DIR / "public"

app = FastAPI(title="MAHABAT ALFAN PDF Calculator")

def item_length(item):
    t = item[0]
    if t == "l":
        p1, p2 = item[1], item[2]
        return math.dist((p1.x, p1.y), (p2.x, p2.y))
    if t == "re":
        r = item[1]
        return 2 * ((r.x1 - r.x0) + (r.y1 - r.y0))
    if t == "qu":
        q = item[1]
        pts = [(q.ul.x, q.ul.y), (q.ur.x, q.ur.y), (q.lr.x, q.lr.y), (q.ll.x, q.ll.y)]
        return sum(math.dist(pts[i], pts[(i + 1) % 4]) for i in range(4))
    if t == "c":
        p0, p1, p2, p3 = item[1], item[2], item[3], item[4]
        def bez(tt):
            x=(1-tt)**3*p0.x + 3*(1-tt)**2*tt*p1.x + 3*(1-tt)*tt**2*p2.x + tt**3*p3.x
            y=(1-tt)**3*p0.y + 3*(1-tt)**2*tt*p1.y + 3*(1-tt)*tt**2*p2.y + tt**3*p3.y
            return x, y
        pts=[bez(i/24) for i in range(25)]
        return sum(math.dist(pts[i], pts[i+1]) for i in range(24))
    return 0.0

@app.post("/api/analyze-pdf")
async def analyze_pdf(file: UploadFile = File(...)):
    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(status_code=400, detail="الملف يجب أن يكون PDF.")
    data = await file.read()
    try:
        doc = fitz.open(stream=data, filetype="pdf")
    except Exception:
        raise HTTPException(status_code=400, detail="تعذر فتح الملف كـ PDF صالح.")

    total_points = 0.0
    path_count = 0

    for page in doc:
        drawings = page.get_drawings()
        path_count += len(drawings)
        for d in drawings:
            for item in d.get("items", []):
                total_points += item_length(item)

    if path_count == 0 or total_points <= 0:
        raise HTTPException(status_code=422, detail="لم يتم العثور على مسارات هندسية قابلة للتحليل داخل الملف.")

    # PDF points -> mm -> meters
    total_meters = total_points * 25.4 / 72.0 / 1000.0

    return {
        "filename": file.filename,
        "page_count": len(doc),
        "path_count": path_count,
        "total_meters": total_meters,
        "analysis_mode": "PDF Vector"
    }

@app.get("/")
def root():
    return FileResponse(PUBLIC_DIR / "index.html")

app.mount("/", StaticFiles(directory=PUBLIC_DIR, html=True), name="static")
