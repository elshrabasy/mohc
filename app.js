
const ORDER_KEY='mahabat_theme_orders_v1';
const SESSION_KEY='mahabat_theme_session_v1';
const USER_KEY='mahabat_theme_users_v1';
const WHATSAPP='966564391706';

const statusMap={
  design:{label:'جاري التصميم',className:'status-design'},
  manufacturing:{label:'الأوردر تحت التصنيع',className:'status-manufacturing'},
  ready:{label:'الأوردر جاهز للاستلام',className:'status-ready'},
  cancelled:{label:'ملغي',className:'status-cancelled'}
};

const i18n={
  ar:{
    dir:'rtl',
    langButton:'EN',
    companyName:'مهابة الفن',
    companySub:'للدعاية والإعلان',
    topPhone:'واتساب مباشر',
    navHome:'الرئيسية',
    navTrack:'تتبع الأوردر',
    navLogin:'دخول الإدارة',
    navPortfolio:'أعمالنا',
    navQuote:'اطلب عرض سعر',
    heroBadge:'متخصصون في تنفيذ قوالب التكسير',
    heroTitle:'حلول صناعة دقيقة\nومتخصصة بأعلى جودة',
    heroLead:'تطوير بصري جديد للموقع باستخدام الصور التي أرسلتها، مع ثيم فاخر أقوى، ومسار أوضح للعميل من عرض الخدمة حتى طلب السعر وتتبع الأوردر.',
    heroBtn1:'اطلب عرض سعر الآن',
    heroBtn2:'تابع الأوردر',
    metric1:'واجهة احترافية',
    metric1p:'تعكس قوة البراند',
    metric2:'تجربة ثنائية اللغة',
    metric2p:'عربي وإنجليزي بسلاسة',
    metric3:'نظام تشغيل يومي',
    metric3p:'للإدارة والموظفين',
    chip1:'ثيم بصري أفخم',
    chip1p:'مع صور حقيقية من نشاطك',
    featuresTitle:'ما الذي أصبح أقوى في هذه النسخة؟',
    featuresLead:'تم تطبيق الثيم الجديد على الموقع مع استخدام صور أقرب للنشاط الحقيقي، لتقوية الانطباع والثقة والهوية البصرية.',
    feat1:'هوية أقوى بصريًا',
    feat1p:'ألوان أعمق، تباين أجمل، ومساحات أنظف.',
    feat2:'صور أكثر واقعية',
    feat2p:'استبدال الصور الافتراضية بصور من المجال نفسه.',
    feat3:'واجهة بيع أوضح',
    feat3p:'دعوات مباشرة للتواصل وطلب عرض سعر.',
    feat4:'احترافية أعلى',
    feat4p:'الصفحة الآن أقرب لموقع شركة تنفيذ حقيقية.',
    servicesTitle:'خدماتنا',
    servicesLead:'هيكل تسويقي أوضح يعرض الخدمة الأساسية والخدمات المساندة بشكل أنظف.',
    service1:'قوالب تكسير',
    service1p:'تنفيذ احترافي ودقة في التشكيل والتجهيز.',
    service2:'شحّات خشبية',
    service2p:'حلول تجهيز وخامات مناسبة لمتطلبات التنفيذ.',
    service3:'تصنيع حسب الطلب',
    service3p:'مرونة في المقاسات والتفاصيل وفق احتياج العميل.',
    portfolioTitle:'أعمالنا',
    portfolioLead:'تم إدخال صورك داخل التصميم بدل الصور المؤقتة السابقة.',
    port1:'تشغيل وتجهيز',
    port2:'نماذج قوالب دقيقة',
    port3:'تنفيذ إنتاجي',
    processTitle:'كيف ننجز الطلب؟',
    processLead:'شرح مسار الطلب يرفع الثقة ويجعل العميل يفهم المراحل بوضوح.',
    step1:'استقبال الطلب',
    step1p:'تسجيل البيانات ومراجعة المطلوب.',
    step2:'التصميم والتحضير',
    step2p:'ضبط المقاسات والتفاصيل الفنية.',
    step3:'التصنيع والتنفيذ',
    step3p:'إدخال الطلب في مرحلة الإنتاج والمتابعة.',
    step4:'الجاهزية والإشعار',
    step4p:'إشعار العميل بمجرد جاهزية الأوردر.',
    quoteTitle:'احصل على عرض سعر مباشر',
    quoteLead:'املأ البيانات الأساسية وسيتم فتح رسالة واتساب مجهزة تلقائيًا.',
    qName:'الاسم',
    qPhone:'رقم الهاتف',
    qType:'نوع الطلب',
    qQty:'الكمية',
    qNotes:'تفاصيل إضافية',
    qTypePlaceholder:'مثال: قالب تكسير / شحّات خشبية',
    qBtn:'إرسال عبر واتساب',
    trustTitle:'جاهز للمرحلة التالية',
    trustLead:'النسخة الحالية صارت أقوى بصريًا بكثير. والخطوة التالية المثالية هي تحويلها إلى نظام متصل بقاعدة بيانات حقيقية.',
    footerAbout:'مهابة الفن بهوية بصرية أحدث، وصور أقرب للنشاط الحقيقي، وتجربة أنظف للعميل والإدارة.',
    footerLinks:'روابط سريعة',
    footerSystem:'النظام',
    footerCopy:'© 2026 مهابة الفن للدعاية والإعلان',
    wa:'واتساب'
  },
  en:{
    dir:'ltr',
    langButton:'AR',
    companyName:'MAHABAT ALFAN',
    companySub:'Advertising & Production',
    topPhone:'Direct WhatsApp',
    navHome:'Home',
    navTrack:'Track Order',
    navLogin:'Admin Login',
    navPortfolio:'Portfolio',
    navQuote:'Request Quote',
    heroBadge:'Specialists in breaking mold execution',
    heroTitle:'Precise industrial solutions\nand higher-end execution',
    heroLead:'A new visual upgrade using the images you sent, with a more premium theme and a clearer path from service presentation to quote request and order tracking.',
    heroBtn1:'Request Quote Now',
    heroBtn2:'Track Order',
    metric1:'Premium Interface',
    metric1p:'Reflects brand strength',
    metric2:'Bilingual Experience',
    metric2p:'Arabic & English smoothly',
    metric3:'Operational Workflow',
    metric3p:'For admin & employees',
    chip1:'Stronger premium theme',
    chip1p:'With real-industry visuals',
    featuresTitle:'What is stronger in this version?',
    featuresLead:'The new visual theme was applied to the website using images closer to the real business, improving trust and presentation.',
    feat1:'Stronger visual identity',
    feat1p:'Deeper colors, cleaner contrast, and better spacing.',
    feat2:'More realistic imagery',
    feat2p:'Placeholder visuals were replaced with industry images.',
    feat3:'Clearer sales flow',
    feat3p:'Stronger calls to action for contact and quote requests.',
    feat4:'Higher professionalism',
    feat4p:'The site now feels much closer to a real execution company.',
    servicesTitle:'Our Services',
    servicesLead:'A cleaner marketing structure that presents the main service and supporting solutions more effectively.',
    service1:'Breaking Molds',
    service1p:'Professional execution and precision preparation.',
    service2:'Wooden Sheets',
    service2p:'Material and preparation solutions for execution needs.',
    service3:'Custom Manufacturing',
    service3p:'Flexible sizes and details based on customer requirements.',
    portfolioTitle:'Our Work',
    portfolioLead:'Your images have now been placed into the design instead of temporary placeholders.',
    port1:'Operation & preparation',
    port2:'Precision die boards',
    port3:'Production execution',
    processTitle:'How do we complete the order?',
    processLead:'A clear workflow increases customer trust and explains the stages properly.',
    step1:'Order intake',
    step1p:'Registering details and reviewing requirements.',
    step2:'Design & preparation',
    step2p:'Adjusting dimensions and technical details.',
    step3:'Manufacturing',
    step3p:'Moving the order into production and follow-up.',
    step4:'Ready & notified',
    step4p:'The customer is notified once the order is ready.',
    quoteTitle:'Get a direct quote',
    quoteLead:'Fill in the essentials and WhatsApp will open with a prepared message.',
    qName:'Name',
    qPhone:'Phone Number',
    qType:'Request Type',
    qQty:'Quantity',
    qNotes:'Additional Details',
    qTypePlaceholder:'Example: breaking mold / wooden sheets',
    qBtn:'Send via WhatsApp',
    trustTitle:'Ready for the next phase',
    trustLead:'This version is now visually much stronger. The ideal next step is turning it into a real database-connected system.',
    footerAbout:'MAHABAT ALFAN with a more modern visual identity, more relevant business imagery, and a cleaner customer/admin experience.',
    footerLinks:'Quick Links',
    footerSystem:'System',
    footerCopy:'© 2026 MAHABAT ALFAN Advertising & Production',
    wa:'WhatsApp'
  }
};

function cryptoRandomId(){return 'id-'+Math.random().toString(36).slice(2,10)+Date.now().toString(36)}
function seedUsers(){
  if(localStorage.getItem(USER_KEY)) return;
  localStorage.setItem(USER_KEY, JSON.stringify([
    {id:cryptoRandomId(), username:'admin', password:'admin123', role:'admin', name:'مدير النظام'},
    {id:cryptoRandomId(), username:'employee', password:'employee123', role:'employee', name:'موظف التشغيل'}
  ]));
}
function seedOrders(){
  if(localStorage.getItem(ORDER_KEY)) return;
  const now=new Date();
  localStorage.setItem(ORDER_KEY, JSON.stringify([
    {
      id:cryptoRandomId(),
      orderNo:'ORD-001',
      customer:'Sample Client',
      phone:'966564391706',
      description:'قالب تكسير خاص',
      status:'manufacturing',
      notes:'تم بدء التشغيل',
      cancelReason:'',
      createdAt:new Date(now.getTime()-1000*60*60*18).toISOString(),
      completedAt:null,
      createdByRole:'admin'
    }
  ]));
}
function initAppData(){seedUsers();seedOrders()}
function getOrders(){initAppData();try{return JSON.parse(localStorage.getItem(ORDER_KEY)||'[]')}catch{return[]}}
function saveOrders(orders){localStorage.setItem(ORDER_KEY, JSON.stringify(orders))}
function upsertOrder(order){
  const orders=getOrders();
  const idx=orders.findIndex(o=>o.id===order.id);
  if(idx>=0) orders[idx]=order; else orders.unshift(order);
  saveOrders(orders);
}
function hardDeleteOrder(id){saveOrders(getOrders().filter(o=>o.id!==id))}
function getUsers(){initAppData();try{return JSON.parse(localStorage.getItem(USER_KEY)||'[]')}catch{return[]}}
function login(username,password,role){
  const user=getUsers().find(u=>u.username===username&&u.password===password&&u.role===role);
  if(!user) return null;
  localStorage.setItem(SESSION_KEY, JSON.stringify({username:user.username,role:user.role,name:user.name}));
  return user;
}
function getSession(){try{return JSON.parse(localStorage.getItem(SESSION_KEY)||'null')}catch{return null}}
function logout(){localStorage.removeItem(SESSION_KEY)}
function requireRole(roles){
  const s=getSession();
  if(!s || !roles.includes(s.role)){window.location.href='login.html'; return null;}
  return s;
}
function formatStatus(status){
  const s=statusMap[status]||statusMap.design;
  return `<span class="status ${s.className}">${s.label}</span>`;
}
function formatDuration(order){
  if(!order.createdAt) return '-';
  const start=new Date(order.createdAt);
  const end=order.completedAt ? new Date(order.completedAt) : new Date();
  const mins=Math.floor(Math.max(0,end-start)/(1000*60));
  const days=Math.floor(mins/(60*24));
  const hours=Math.floor((mins-days*24*60)/60);
  const minutes=mins%60;
  if(days>0) return `${days} يوم ${hours} ساعة`;
  if(hours>0) return `${hours} ساعة ${minutes} دقيقة`;
  return `${minutes} دقيقة`;
}
function calcStats(orders){
  return {
    total:orders.length,
    design:orders.filter(o=>o.status==='design').length,
    manufacturing:orders.filter(o=>o.status==='manufacturing').length,
    ready:orders.filter(o=>o.status==='ready').length,
    cancelled:orders.filter(o=>o.status==='cancelled').length
  };
}
function estimateAverageDone(orders){
  const done=orders.filter(o=>o.completedAt);
  if(!done.length) return '0.0';
  const total=done.map(o=>Math.max(0,new Date(o.completedAt)-new Date(o.createdAt))/(1000*60*60*24)).reduce((a,b)=>a+b,0);
  return (total/done.length).toFixed(1);
}
function escapeHtml(v=''){
  return String(v).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
}
function openWhatsAppReadyMessage(order){
  if(!order.phone) return;
  const normalized=String(order.phone).replace(/[^\d]/g,'');
  if(!normalized) return;
  const text=`عميلنا العزيز ${order.customer || ''}، نحيطكم علمًا بأن الأوردر رقم ${order.orderNo} أصبح جاهزًا للاستلام الآن. شركة مهابة الفن.`;
  window.open(`https://wa.me/${normalized}?text=${encodeURIComponent(text)}`,'_blank');
}
function getLang(){return localStorage.getItem('mahabat_lang_theme') || 'ar'}
function setLang(lang){localStorage.setItem('mahabat_lang_theme',lang)}
function applyLang(){
  const lang=getLang();
  const dict=i18n[lang] || i18n.ar;
  document.documentElement.lang=lang;
  document.documentElement.dir=dict.dir;
  document.body.classList.toggle('en', lang==='en');
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.dataset.i18n;
    if(dict[key]!==undefined){
      if(el.dataset.i18nTarget==='html') el.innerHTML=dict[key].replaceAll('\n','<br>');
      else el.textContent=dict[key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key=el.dataset.i18nPlaceholder;
    if(dict[key]!==undefined) el.setAttribute('placeholder', dict[key]);
  });
  const btn=document.getElementById('langToggle');
  if(btn) btn.textContent=dict.langButton;
}
function setupLangToggle(){
  const btn=document.getElementById('langToggle');
  if(btn){btn.addEventListener('click',()=>{setLang(getLang()==='ar'?'en':'ar'); applyLang();});}
}
function buildQuoteMessage(data){
  if(getLang()==='en'){
    return `Hello, I would like to request a quote.\nName: ${data.name}\nPhone: ${data.phone}\nRequest Type: ${data.type}\nQuantity: ${data.qty}\nDetails: ${data.notes}`;
  }
  return `مرحبًا، أريد طلب عرض سعر.\nالاسم: ${data.name}\nرقم الهاتف: ${data.phone}\nنوع الطلب: ${data.type}\nالكمية: ${data.qty}\nالتفاصيل: ${data.notes}`;
}
function setupMenu(){
  const btn=document.querySelector('.menu-btn');
  const nav=document.querySelector('.main-nav');
  if(btn && nav){btn.addEventListener('click',()=>nav.classList.toggle('open')); }
}
function setUserHeader(){
  const target=document.getElementById('sessionInfo');
  if(!target) return;
  const s=getSession();
  if(!s){target.innerHTML=''; return;}
  const role=s.role==='admin' ? 'مدير' : 'موظف';
  target.innerHTML=`<div class="inline"><span class="notice success">${escapeHtml(s.name)} - ${role}</span><button id="logoutBtn" class="small-btn danger">تسجيل خروج</button></div>`;
  const btn=document.getElementById('logoutBtn');
  if(btn){btn.addEventListener('click',()=>{logout(); window.location.href='login.html';});}
}
function createOrderFromFields(fields, existing, role){
  const status=fields.status.value;
  if(!fields.customer.value.trim() || !fields.orderNo.value.trim()){
    alert('اسم العميل ورقم الأوردر مطلوبان.');
    return null;
  }
  if(status==='cancelled' && !fields.cancelReason.value.trim()){
    alert('يجب كتابة سبب الإلغاء.');
    return null;
  }
  const order=existing || {
    id:fields.id.value || cryptoRandomId(),
    createdAt:new Date().toISOString(),
    completedAt:null,
    createdByRole:role
  };
  const prevStatus=order.status;
  order.customer=fields.customer.value.trim();
  order.orderNo=fields.orderNo.value.trim();
  order.phone=fields.phone.value.trim();
  order.status=status;
  order.description=fields.description.value.trim();
  order.notes=fields.notes.value.trim();
  order.cancelReason=status==='cancelled' ? fields.cancelReason.value.trim() : '';
  if((status==='ready' || status==='cancelled') && !order.completedAt){order.completedAt=new Date().toISOString();}
  if(status!=='ready' && status!=='cancelled'){order.completedAt=null;}
  return {order, prevStatus};
}
document.addEventListener('DOMContentLoaded',()=>{
  initAppData();
  setupMenu();
  setupLangToggle();
  setUserHeader();
  applyLang();
});
