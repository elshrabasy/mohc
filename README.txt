MAHABAT ALFAN - Smart PDF Calculator

This package contains:
- public/ : the website files
- server.py : FastAPI backend for analyzing engineering PDF files
- requirements.txt : Python dependencies

How to run locally:
1) Install dependencies:
   pip install -r requirements.txt

2) Start server:
   uvicorn server:app --reload

3) Open:
   http://127.0.0.1:8000

Login demo:
- admin / admin123
- employee / employee123

What the PDF calculator does:
- Accepts engineering PDF files
- Extracts vector paths using PyMuPDF
- Calculates total path length in meters
- Can show an estimated price if a price-per-meter is entered

Important:
- Best results come from vector PDFs
- Scanned image PDFs will not produce reliable results
