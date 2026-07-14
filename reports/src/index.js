// Iceberg Media — Standardized SEO Report Worker Template
// Replace mapking, MapKings Performance, mapkings.co.uk, 67b2080e-05f3-488c-a1ac-634ae2cb4ff9 etc.

const SLUG = 'mapking';
const CLIENT_NAME = 'MapKings Performance';
const DOMAIN = 'mapkings.co.uk';
const PROJECT_ID = '67b2080e-05f3-488c-a1ac-634ae2cb4ff9';
const RELATED_REPORTS = []; // Override per client
const SOCIAL = [{name:'Book a Remap',url:'https://mapkings.co.uk/book-ecu-remap-buckinghamshire/'},{name:'Leave a Review',url:'https://g.page/r/CRNAdlaB4HnOEBM/review'}]; // {name, url, icon} pairs — icon is emoji or text
const NAP = { // Business NAP+WS data
  name: 'MapKings Performance',
  address: 'Buckinghamshire, UK (Mobile)', // Business address
  website: 'https://mapkings.co.uk',
  phone: '07306 558428',
  email: 'mapkingperformance@gmail.com',
  socials: [{platform:'Facebook',url:'https://www.facebook.com/mapkingperformance',username:'mapkingperformance'}] // {platform, url, username}
};
const CONTACT = { // Highrise contact
  name: 'Anis',
  email: '',
  phone: '',
  whatsapp: '447306558428', // WhatsApp number (if different from phone)
  highriseId: '347131015' // Person ID for link
};
const LOGO_URL = 'https://reports-icebergmedia.pages.dev/mapking/iceberg-textlogo.png';
const ICEBERG_URL = 'https://icebergmedia.co.uk';
const CALENDAR_URL = 'https://cal.icebergmedia.co.uk/hans';
const ACCESS_URL = 'https://access.icebergmedia.co.uk/';
const PASSWORD = 'seo960';
const COOKIE_NAME = 'iceberg_report_auth';
const COOKIE_MAX_AGE = 86400 * 180; // 30 days

// OpenSEO MCP endpoint (internal)
const OPENSEO_MCP = 'https://dash.icebergmedia.co.uk/mcp';
const OPENSEO_API_KEY = 'gqmHD2LRi8yaHPqtXkCQ9bCu8hF6zlxjOYF97xdF-jI';

const STYLES = `
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f5f5f5;color:#222;line-height:1.8;font-size:18px}
.container{max-width:1200px;margin:0 auto;padding:24px}
.header{background:#1a1a2e;color:#fff;padding:24px;border-radius:12px;margin-bottom:24px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px}
.header-left{display:flex;align-items:center;gap:16px}
.header img{height:44px;cursor:pointer}
.header h1{font-size:24px;font-weight:700}
.header p{color:#aaa;font-size:14px}
.header .cta{background:#10b981;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:15px}
.card{background:#fff;border-radius:12px;padding:24px;margin-bottom:20px;box-shadow:0 1px 3px rgba(0,0,0,.06)}
.card h2{font-size:20px;color:#1a1a2e;margin-bottom:16px;padding-bottom:10px;border-bottom:2px solid #e5e7eb}
.stats{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-bottom:20px}
@media(min-width:768px){.stats{grid-template-columns:repeat(4,1fr)}}
.stat{background:#fff;border-radius:12px;padding:20px;box-shadow:0 1px 3px rgba(0,0,0,.06);cursor:pointer;transition:all .15s;text-decoration:none;color:inherit;display:block;border:2px solid transparent;text-align:center}
.stat:hover{transform:translateY(-2px);box-shadow:0 4px 12px rgba(0,0,0,.1);border-color:#10b981}
.stat-value{font-size:32px;font-weight:700;color:#1a1a2e}
.stat-label{font-size:15px;color:#555;margin-top:6px}
.stat-arrow{color:#10b981;font-size:13px;margin-top:8px}
.progress-bar{background:#e5e7eb;border-radius:6px;height:10px;margin-top:10px;overflow:hidden;width:100%}
.progress-fill{background:#10b981;height:100%;border-radius:6px}
.checklist-item{display:flex;align-items:flex-start;gap:12px;padding:12px;border-radius:6px;margin-bottom:6px;background:#fafafa;cursor:pointer}
.checklist-item:hover{background:#f0f0f0}
.checklist-item.done{background:#f0fdf4;opacity:.7}
.check-icon{width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;margin-top:2px}
.check-pending{background:#fef3c7;color:#92400e}
.check-done{background:#10b981;color:#fff}
.check-title{font-weight:600;font-size:16px}
.check-desc{color:#555;font-size:15px;margin-top:3px}
table{width:100%;border-collapse:collapse;font-size:15px}
th{text-align:left;padding:10px 8px;border-bottom:2px solid #e5e7eb;color:#556;font-weight:600;font-size:14px}
td{padding:10px 8px;border-bottom:1px solid #f0f0f0}
.rank-pos{font-weight:700;font-size:18px;color:#1a1a2e}
.rank-na{color:#999;font-style:italic}
.link{color:#1a73e8;text-decoration:underline;cursor:pointer}
.work-item{padding:14px;background:#fafafa;border-radius:6px;margin-bottom:8px;cursor:pointer;border:1px solid transparent}
.work-item:hover{border-color:#e5e7eb;background:#f5f5f5}
.work-date{font-size:13px;color:#888}
.work-title{font-weight:600;font-size:16px}
.work-desc{color:#555;font-size:15px;margin-top:3px}
.detail-panel{background:#fff;border:1px solid #e5e7eb;border-radius:6px;padding:16px;margin-top:6px;font-size:15px;color:#444;display:none;white-space:pre-wrap;line-height:1.8}
.detail-panel.open{display:block}
.warning-box{background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:16px;margin-bottom:16px;font-size:15px;color:#991b1b;line-height:1.8}
.info-box{background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:16px;margin-bottom:16px;font-size:15px;color:#1e3a5f;line-height:1.8}
.breadcrumb{font-size:15px;color:#555;margin-bottom:14px}
.breadcrumb a{color:#1a73e8;text-decoration:underline}
.btn{display:inline-block;background:#10b981;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:600;font-size:16px;border:none;cursor:pointer}
.btn:hover{background:#059669}
.footer{background:#1a1a2e;color:#fff;padding:28px;border-radius:12px;margin-top:24px}
.footer-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px}
.footer-col{min-width:0}
.footer img{height:28px;cursor:pointer;margin-bottom:10px}
.footer p{color:#aaa;font-size:13px;line-height:1.8}
.footer a{color:#10b981;text-decoration:underline}
.metric-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-bottom:20px}
.metric-card{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:16px}
.metric-value{font-size:28px;font-weight:700;color:#1a1a2e}
.metric-label{font-size:13px;color:#64748b;margin-top:3px}
.pw-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:#1a1a2e;display:flex;align-items:center;justify-content:center;z-index:9999}
.pw-box{background:#fff;border-radius:12px;padding:36px;max-width:400px;width:90%;text-align:center}
.pw-box h2{font-size:24px;margin-bottom:10px;color:#1a1a2e}
.pw-box p{color:#666;font-size:16px;margin-bottom:24px}
.pw-box input{width:100%;padding:14px;border:2px solid #e5e7eb;border-radius:8px;font-size:18px;text-align:center;margin-bottom:14px}
.pw-box input:focus{border-color:#10b981;outline:none}
.pw-error{color:#dc2626;font-size:15px;margin-bottom:10px;display:none}
`;

function checkAuth(request) {
  const cookie = request.headers.get('Cookie') || '';
  return cookie.includes(`${COOKIE_NAME}=1`);
}

function loginPage() {
  return `<!DOCTYPE html><html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta name="robots" content="noindex,nofollow,noarchive,nosnippet">
<title>${CLIENT_NAME} — Iceberg Media</title>
<style>${STYLES}</style>
</head><body>
<div class="pw-overlay">
<div class="pw-box">
<h2>${CLIENT_NAME}</h2>
<p>Enter your access code to view this report</p>
<div class="pw-error" id="pwError">Incorrect code. Please try again.</div>
<input type="password" id="pwInput" placeholder="Enter code" autofocus onkeydown="if(event.key==='Enter')checkPw()">
<button class="btn" style="width:100%" onclick="checkPw()">View Report</button>
</div>
</div>
<script>
function checkPw(){
  const input=document.getElementById('pwInput').value;
  if(input==='${PASSWORD}'){
    document.cookie='${COOKIE_NAME}=1;max-age=${COOKIE_MAX_AGE};path=/;SameSite=Lax';
    location.reload();
  }else{
    document.getElementById('pwError').style.display='block';
    document.getElementById('pwInput').value='';
    document.getElementById('pwInput').focus();
  }
}
document.getElementById('pwInput').focus();
</script>
</body></html>`;
}

function navHTML(active) {
  const related = RELATED_REPORTS || [];
  const items = [
    { href: `/${SLUG}/`, label: 'Home' },
    { href: `/${SLUG}/traffic`, label: 'Traffic' },
    { href: `/${SLUG}/outreach`, label: 'Outreach' },
  ];
  return `<nav style="display:flex;gap:6px;flex-wrap:wrap">${related.map(r => `<a href="${r.href}" style="color:#f59e0b;text-decoration:none;font-size:13px;padding:6px 14px;border-radius:4px;border:1px solid #f59e0b">${r.label}</a>`).join("")}${items.map(i => `<a href="${i.href}" style="color:${active === i.href ? '#fff' : '#aaa'};text-decoration:none;font-size:13px;padding:6px 14px;border-radius:4px;${active === i.href ? 'background:rgba(255,255,255,.15)' : ''}">${i.label}</a>`).join('')}</nav>`;
}

function renderPage(content, opts = {}) {
  const { title = CLIENT_NAME, active = `/${SLUG}/` } = opts;
  return `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta name="robots" content="noindex,nofollow,noarchive,nosnippet">
<title>${title} — Iceberg Media</title>
<style>${STYLES}</style>
</head><body>
<div class="container">
<div class="header">
<div class="header-left">
<a href="${ICEBERG_URL}" target="_blank"><img src="${LOGO_URL}" alt="IcebergMedia.co.uk"></a>
<div><h1>${CLIENT_NAME}</h1><p>SEO Tracking Report</p></div>
</div>
<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
${navHTML(active)}
<a href="${CALENDAR_URL}" class="cta" target="_blank">Book a Call</a>
</div>
</div>
${content}
<div class="footer">
<div class="footer-grid">
<div class="footer-col">
<a href="${ICEBERG_URL}" target="_blank"><img src="${LOGO_URL}" alt="IcebergMedia.co.uk"></a>
<p>Manchester SEO AI Agency</p>
</div>
<div class="footer-col">
<p style="font-weight:600;color:#fff;margin-bottom:4px">Quick Links</p>
<p><a href="${ACCESS_URL}" target="_blank">Grant Platform Access</a></p>
<p><a href="${CALENDAR_URL}" target="_blank">Book a Call</a></p>
</div>
<div class="footer-col">
<p style="font-weight:600;color:#fff;margin-bottom:4px">Website</p>
<p><a href="https://${DOMAIN}" target="_blank">${DOMAIN}</a></p>
<p><a href="${ICEBERG_URL}" target="_blank">IcebergMedia.co.uk</a></p>
</div>
</div>
</div>
</div>
<script>
document.querySelectorAll('[data-toggle]').forEach(el=>{el.addEventListener('click',e=>{e.preventDefault();const t=document.getElementById(el.dataset.toggle);if(t)t.classList.toggle('open')})});
document.querySelectorAll('.checklist-item').forEach(el=>{el.addEventListener('click',()=>{const d=el.nextElementSibling;if(d&&d.classList.contains('detail-panel'))d.classList.toggle('open')})});
</script>
</body></html>`;
}

// Fetch GSC data from OpenSEO
async function fetchGscData() {
  try {
    const resp = await fetch(OPENSEO_MCP, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json, text/event-stream', 'Authorization': 'Bearer ' + OPENSEO_API_KEY },
      body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'tools/call', params: { name: 'get_search_console_performance', arguments: { projectId: PROJECT_ID } } })
    });
    const data = await resp.json();
    const sc = data?.result?.structuredContent;
    if (!sc?.ok) return null;
    return sc;
  } catch { return null; }
}

// Fetch keyword rankings from OpenSEO
async function fetchKeywordData() {
  try {
    const resp = await fetch(OPENSEO_MCP, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json, text/event-stream', 'Authorization': 'Bearer ' + OPENSEO_API_KEY },
      body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'tools/call', params: { name: 'get_rank_tracker', arguments: { projectId: PROJECT_ID } } })
    });
    const data = await resp.json();
    return data?.result?.structuredContent || null;
  } catch { return null; }
}

// Fetch saved keywords from OpenSEO
async function fetchSavedKeywords() {
  try {
    const resp = await fetch(OPENSEO_MCP, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json, text/event-stream', 'Authorization': 'Bearer ' + OPENSEO_API_KEY },
      body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'tools/call', params: { name: 'list_saved_keywords', arguments: { projectId: PROJECT_ID, limit: 250 } } })
    });
    const data = await resp.json();
    return data?.result?.structuredContent?.rows || [];
  } catch { return []; }
}

function renderHomepage(data, gsc, keywords, savedKw) {
  const { checklist, workLog } = data;
  const total = checklist.length;
  const done = checklist.filter(i => i.status === 'done').length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const accessItems = checklist.filter(i => i.category === 'access' && i.status === 'pending');

  const gscClicks = gsc?.rows?.reduce((s, r) => s + (r.clicks || 0), 0) || 0;
  const gscImpressions = gsc?.rows?.reduce((s, r) => s + (r.impressions || 0), 0) || 0;
  const gscQueries = gsc?.rowCount || 0;
  const rankedKw = savedKw.filter(k => k.searchVolume > 0).length;
  const topKw = savedKw.filter(k => k.searchVolume > 0).sort((a,b) => b.searchVolume - a.searchVolume).slice(0,8);
  const topQueries = (gsc?.rows || []).sort((a,b) => b.impressions - a.impressions).slice(0,8);

  return renderPage(`
<!-- THREE STAT BOXES ON TOP -->
<div class="stats">
${gscImpressions > 0 ? `<a href="/${SLUG}/traffic" class="stat"><div class="stat-value">${gscImpressions.toLocaleString()}</div><div class="stat-label">Impressions</div><div class="stat-arrow">View details →</div></a>` : `<div class="stat"><div class="stat-value">—</div><div class="stat-label">Impressions</div></div>`}
${gscClicks > 0 ? `<a href="/${SLUG}/traffic" class="stat"><div class="stat-value">${gscClicks.toLocaleString()}</div><div class="stat-label">Clicks</div><div class="stat-arrow">View details →</div></a>` : `<div class="stat"><div class="stat-value">—</div><div class="stat-label">Clicks</div></div>`}
<a href="/${SLUG}/progress" class="stat">
<div class="stat-value">${pct}%</div>
<div class="stat-label">Progress</div>
<div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
</a>
</div>

<!-- WHAT WE NEED FROM YOU -->
${(() => {
  const pending = checklist.filter(i => i.status === 'pending');
  const recentDone = checklist.filter(i => i.status === 'done').slice(0, 3);
  if (pending.length === 0 && recentDone.length === 0) return '';
  return `
<div class="card">
<h2 style="cursor:pointer" onclick="window.location='/${SLUG}/needs'">What We Need From You ↗</h2>
${pending.length > 0 ? `
<div style="margin-bottom:12px">
<div style="font-size:15px;color:#92400e;font-weight:600;margin-bottom:8px">Still needed (${pending.length}):</div>
${pending.slice(0, 4).map(item => `
<div style="display:flex;align-items:center;gap:10px;padding:5px 0;font-size:15px">
<span style="color:#f59e0b;font-size:16px">○</span>
<span style="font-weight:500">${item.title}</span>
<span style="color:#888;font-size:13px">${item.description ? '— ' + item.description.substring(0, 60) : ''}</span>
</div>`).join('')}
${pending.length > 4 ? `<div style="font-size:13px;color:#888;margin-top:6px">+${pending.length - 4} more →</div>` : ''}
</div>` : ''}
${recentDone.length > 0 ? `
<div style="font-size:15px;color:#059669;font-weight:600;margin-bottom:8px">Recently received:</div>
${recentDone.map(item => `
<div style="display:flex;align-items:center;gap:10px;padding:5px 0;font-size:15px;opacity:.7">
<span style="color:#10b981;font-size:16px">✓</span>
<span>${item.title}</span>
${item.completed_date ? `<span style="color:#888;font-size:12px">${new Date(item.completed_date).toLocaleDateString('en-GB')}</span>` : ''}
</div>`).join('')}
</div>` : ''}
</div>`;
})()}

<!-- WORK COMPLETED -->
<div class="card">
<h2><a href="/${SLUG}/work" class="link" style="color:inherit;text-decoration:none">Work Completed</a> <span style="font-size:14px;color:#888;font-weight:400">(${workLog.length})</span></h2>
${workLog.length > 0 ? workLog.slice(0, 4).map(w => `
<div style="display:flex;align-items:center;gap:10px;padding:6px 0;border-bottom:1px solid #f0f0f0">
<span style="color:#10b981;font-size:16px">✓</span>
<div style="flex:1">
<div style="font-weight:600;font-size:15px">${w.title}</div>
<div style="font-size:13px;color:#888">${new Date(w.completed_at).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})}</div>
</div>
</div>`).join('') : '<p style="color:#999;font-size:14px">No work logged yet.</p>'}
${workLog.length > 4 ? `<a href="/${SLUG}/work" style="display:block;text-align:center;padding:8px;font-size:13px;color:#1a73e8;margin-top:8px">View all ${workLog.length} items →</a>` : ''}
</div>

<!-- BUSINESS DETAILS -->
<div class="card">
<h2>Business Details</h2>
<div class="metric-grid">
<div class="metric-card"><div class="metric-label">Business Name</div><div class="metric-value" style="font-size:16px">${NAP.name}</div></div>
${NAP.address ? `<div class="metric-card"><div class="metric-label">Address</div><div class="metric-value" style="font-size:14px">${NAP.address}</div></div>` : ''}
<div class="metric-card"><div class="metric-label">Website</div><div class="metric-value" style="font-size:14px"><a href="${NAP.website}" target="_blank" class="link">${DOMAIN}</a></div></div>
${NAP.phone ? `<div class="metric-card"><div class="metric-label">Phone</div><div class="metric-value" style="font-size:16px">${NAP.phone}</div></div>` : ''}
</div>
${NAP.socials.length > 0 ? `
<div style="margin-top:16px">
<div style="font-size:14px;color:#64748b;font-weight:600;margin-bottom:8px">Social Media</div>
<div style="display:flex;gap:10px;flex-wrap:wrap">
${NAP.socials.map(s => `<a href="${s.url}" target="_blank" style="display:inline-flex;align-items:center;gap:6px;padding:8px 16px;background:#f1f5f9;border-radius:8px;font-size:14px;color:#334155;text-decoration:none;font-weight:500"><span>${s.platform === 'Facebook' ? '📘' : s.platform === 'Instagram' ? '📷' : s.platform === 'Etsy' ? '🧶' : s.platform === 'Google' ? '🔍' : '🔗'}</span>${s.username}</a>`).join('')}
</div>
</div>` : ''}
${SOCIAL.length > 0 ? `
<div style="margin-top:12px">
<div style="display:flex;gap:10px;flex-wrap:wrap">
${SOCIAL.map(s => `<a href="${s.url}" target="_blank" style="display:inline-flex;align-items:center;gap:6px;padding:8px 16px;background:#f1f5f9;border-radius:8px;font-size:14px;color:#334155;text-decoration:none;font-weight:500">🔗 ${s.name}</a>`).join('')}
</div>
</div>` : ''}
</div>

<!-- CONTACT DETAILS -->
${CONTACT.name ? `
<div class="card">
<h2${CONTACT.highriseId ? ` style="cursor:pointer" onclick="window.open('https://icebergmedia.highrisehq.com/people/${CONTACT.highriseId}','_blank')"` : ''}>Contact Details${CONTACT.highriseId ? ' ↗' : ''}</h2>
<div style="display:flex;flex-direction:column;gap:10px">
${CONTACT.name ? `<div style="font-weight:600;font-size:16px">${CONTACT.name}</div>` : ''}
${CONTACT.email ? `<div style="display:flex;align-items:center;gap:8px"><span style="font-size:16px">📧</span><a href="mailto:${CONTACT.email}" class="link" style="font-size:15px">${CONTACT.email}</a></div>` : ''}
${CONTACT.phone ? `<div style="display:flex;align-items:center;gap:8px"><span style="font-size:16px">📞</span><a href="tel:${CONTACT.phone.replace(/\s/g,'')}" class="link" style="font-size:15px">${CONTACT.phone}</a></div>` : ''}
${CONTACT.whatsapp ? `<div style="display:flex;align-items:center;gap:8px"><span style="font-size:16px">💬</span><a href="https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g,'')}" target="_blank" class="link" style="font-size:15px">WhatsApp</a></div>` : ''}
</div>
</div>` : ''}
`, { title: `${CLIENT_NAME} — SEO Report`, active: `/${SLUG}/` });
}

function renderGscPage(gsc, savedKw) {
  const rows = gsc?.rows || [];
  const clicks = rows.reduce((s, r) => s + (r.clicks || 0), 0);
  const impressions = rows.reduce((s, r) => s + (r.impressions || 0), 0);
  const ctr = impressions > 0 ? (clicks / impressions * 100).toFixed(1) : '0';

  return renderPage(`
<div class="breadcrumb"><a href="/${SLUG}/">Home</a> / Search Data</div>
<div class="metric-grid">
<div class="metric-card"><div class="metric-value">${clicks.toLocaleString()}</div><div class="metric-label">Total Clicks</div></div>
<div class="metric-card"><div class="metric-value">${impressions.toLocaleString()}</div><div class="metric-label">Total Impressions</div></div>
<div class="metric-card"><div class="metric-value">${ctr}%</div><div class="metric-label">Average CTR</div></div>
<div class="metric-card"><div class="metric-value">${rows.length}</div><div class="metric-label">Unique Queries</div></div>
</div>
${rows.length > 0 ? `
<div class="card">
<h2>All Search Queries</h2>
<table>
<tr><th>Query</th><th>Impressions</th><th>Clicks</th><th>CTR</th><th>Position</th></tr>
${rows.sort((a,b) => b.impressions - a.impressions).map(r => `
<tr><td style="font-weight:500">${r.keys[0]}</td><td>${r.impressions}</td><td>${r.clicks}</td><td>${r.ctr ? (r.ctr * 100).toFixed(1) + '%' : '—'}</td><td>${r.position?.toFixed(0) || '—'}</td></tr>
`).join('')}
</table>
</div>` : '<div class="card"><p style="color:#999">No search data available yet. This typically takes a few days after GSC is connected.</p></div>'}
<div class="card">
<h2>Tracked Keywords (from OpenSEO)</h2>
<table>
<tr><th>Keyword</th><th>Volume</th><th>Difficulty</th><th>CPC</th></tr>
${savedKw.filter(k => k.searchVolume > 0).sort((a,b) => b.searchVolume - a.searchVolume).map(k => `
<tr><td style="font-weight:500">${k.keyword}</td><td>${k.searchVolume.toLocaleString()}</td><td>${k.keywordDifficulty || '—'}</td><td>${k.cpc ? '$' + k.cpc.toFixed(2) : '—'}</td></tr>
`).join('')}
</table>
</div>`, { title: `Search Data — ${CLIENT_NAME}`, active: `/${SLUG}/gsc` });
}

function renderProgressPage(data) {
  const { checklist } = data;
  const grouped = {};
  for (const item of checklist) { if (!grouped[item.category]) grouped[item.category] = []; grouped[item.category].push(item); }
  const names = { access: 'Access & Logins', website: 'Website Fixes', gbp: 'Google Business Profile', content: 'Content', seo: 'SEO Setup' };
  const icons = { access: '🔑', website: '🌐', gbp: '📍', content: '📝', seo: '📊' };
  return renderPage(`<div class="breadcrumb"><a href="/${SLUG}/">Home</a> / Progress</div>
${Object.entries(grouped).map(([cat, items]) => `
<div class="card"><h2>${icons[cat]||'📋'} ${names[cat]||cat}</h2>
${items.map(item => `<div class="checklist-item ${item.status}">
<div class="check-icon ${item.status==='done'?'check-done':'check-pending'}">${item.status==='done'?'✓':'○'}</div>
<div><div class="check-title">${item.title}</div><div class="check-desc">${item.description||''}</div>
${item.completed_date?`<div style="font-size:11px;color:#888;margin-top:2px">Done: ${new Date(item.completed_date).toLocaleDateString('en-GB')}</div>`:''}</div>
</div>`).join('')}</div>`).join('')}`, { title: `Progress — ${CLIENT_NAME}`, active: `/${SLUG}/progress` });
}

function renderTrafficPage(gsc, savedKw) {
  const gscRows = gsc?.rows || [];
  const gscClicks = gscRows.reduce((s, r) => s + (r.clicks || 0), 0);
  const gscImpressions = gscRows.reduce((s, r) => s + (r.impressions || 0), 0);
  
  // Filter out domain keywords (competitors) - only show actual keywords
  const realKw = savedKw.filter(k => !k.keyword.includes('.co.uk') && !k.keyword.includes('.com') && !k.keyword.includes('.net'));
  const withVol = realKw.filter(k => k.searchVolume > 0).sort((a,b) => b.searchVolume - a.searchVolume);
  
  // Intent color mapping
  const intentColors = {
    transactional: { bg: '#dcfce7', color: '#166534', label: '💰 Transactional' },
    commercial: { bg: '#dbeafe', color: '#1e40af', label: '🛒 Commercial' },
    informational: { bg: '#fef3c7', color: '#92400e', label: '📖 Informational' },
    navigational: { bg: '#e0e7ff', color: '#3730a3', label: '🧭 Navigational' },
  };

  return renderPage(`<div class="breadcrumb"><a href="/${SLUG}/">Home</a> / Traffic</div>

<!-- GSC SUMMARY -->
<div class="metric-grid">
<div class="metric-card"><div class="metric-value">${gscImpressions.toLocaleString()}</div><div class="metric-label">Total Impressions</div></div>
<div class="metric-card"><div class="metric-value">${gscClicks.toLocaleString()}</div><div class="metric-label">Total Clicks</div></div>
<div class="metric-card"><div class="metric-value">${gscRows.length}</div><div class="metric-label">Queries Found</div></div>
<div class="metric-card"><div class="metric-value">${withVol.length}</div><div class="metric-label">Keywords Tracked</div></div>
</div>

<!-- GSC QUERIES (showing they're ranking) -->
${gscRows.length > 0 ? `
<div class="card">
<h2>Google Search Queries <span style="font-size:13px;color:#888;font-weight:400">— where you're showing up</span></h2>
<p style="font-size:14px;color:#555;margin-bottom:14px">These are real searches where your website appeared. Position = where you ranked (lower is better).</p>
<table>
<tr><th>Query</th><th>Impressions</th><th>Clicks</th><th>Position</th><th>CTR</th></tr>
${gscRows.sort((a,b) => b.impressions - a.impressions).map(r => {
  const pos = r.position?.toFixed(0) || '—';
  const posColor = pos <= 3 ? '#166534' : pos <= 10 ? '#1e40af' : pos <= 20 ? '#92400e' : '#999';
  return `<tr>
<td style="font-weight:500">${r.keys[0]}</td>
<td>${r.impressions}</td>
<td>${r.clicks}</td>
<td style="font-weight:700;color:${posColor}">#${pos}</td>
<td>${r.ctr ? (r.ctr * 100).toFixed(1) + '%' : '—'}</td>
</tr>`;
}).join('')}
</table>
</div>` : ''}

<!-- TRACKED KEYWORDS -->
${withVol.length > 0 ? `
<div class="card">
<h2>Tracked Keywords <span style="font-size:13px;color:#888;font-weight:400">— what we're monitoring</span></h2>
<table>
<tr><th>Keyword</th><th>Volume</th><th>Difficulty</th><th>Intent</th><th>CPC</th></tr>
${withVol.map(k => {
  const intent = intentColors[k.intent] || { bg: '#f3f4f6', color: '#6b7280', label: k.intent || '—' };
  const cpc = k.cpc ? '£' + k.cpc.toFixed(2) : '—';
  return `<tr>
<td style="font-weight:500">${k.keyword}</td>
<td>${k.searchVolume.toLocaleString()}</td>
<td>${k.keywordDifficulty ?? '—'}</td>
<td><span style="background:${intent.bg};color:${intent.color};padding:2px 8px;border-radius:4px;font-size:12px;font-weight:500">${intent.label}</span></td>
<td>${cpc}</td>
</tr>`;
}).join('')}
</table>
</div>` : ''}`, { title: `Traffic — ${CLIENT_NAME}`, active: `/${SLUG}/traffic` });
}

function renderWorkPage(data) {
  const { workLog } = data;
  return renderPage(`<div class="breadcrumb"><a href="/${SLUG}/">Home</a> / Work Completed</div>
<div class="card"><h2>Work Completed</h2>
<p style="font-size:13px;color:#555;margin-bottom:14px">Click any item to see full details.</p>
${workLog.length > 0 ? workLog.map(w => `<div class="work-item" data-toggle="work-${w.id}">
<div class="work-date">${new Date(w.completed_at).toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})}</div>
<div class="work-title">${w.title} <span class="link" style="font-size:11px">tap for details →</span></div>
${w.description?`<div class="work-desc">${w.description.substring(0,100)}${w.description.length>100?'...':''}</div>`:''}
</div>
<div class="detail-panel" id="work-${w.id}"><pre style="white-space:pre-wrap;font-family:inherit;font-size:13px;line-height:1.8">${w.description||'No additional details.'}</pre></div>`).join(''):'<p style="color:#999;font-size:13px">No work logged yet.</p>'}</div>`, { title: `Work Log — ${CLIENT_NAME}`, active: `/${SLUG}/work` });
}

function renderNeedsPage(data) {
  const { checklist } = data;
  const categories = { access: 'Access & Logins', website: 'Website', gbp: 'Google Business Profile', content: 'Content', seo: 'SEO Setup' };
  const icons = { access: '🔑', website: '🌐', gbp: '📍', content: '📝', seo: '📊' };
  
  return renderPage(`<div class="breadcrumb"><a href="/${SLUG}/">Home</a> / What We Need</div>
<div class="card">
<h2>What We Need From You — Full History</h2>
<p style="font-size:13px;color:#555;margin-bottom:14px">Everything we've requested and received. Click any item for details.</p>
${Object.entries(categories).map(([cat, label]) => {
  const items = checklist.filter(i => i.category === cat);
  if (items.length === 0) return '';
  return `
<div style="margin-bottom:16px">
<div style="font-weight:600;font-size:14px;margin-bottom:8px">${icons[cat]||'📋'} ${label}</div>
${items.map(item => `
<div class="checklist-item ${item.status}" style="cursor:default">
<div class="check-icon ${item.status==='done'?'check-done':'check-pending'}">${item.status==='done'?'✓':'○'}</div>
<div style="flex:1">
<div class="check-title">${item.title}</div>
<div class="check-desc">${item.description||''}</div>
<div style="display:flex;gap:12px;margin-top:4px;font-size:11px;color:#888">
${item.completed_date ? `<span>Received: ${new Date(item.completed_date).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})}</span>` : '<span style="color:#f59e0b">Pending</span>'}
${item.required_date ? `<span>Requested: ${new Date(item.required_date).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})}</span>` : ''}
</div>
</div>
</div>`).join('')}
</div>`;
}).join('')}
</div>`, { title: `What We Need — ${CLIENT_NAME}`, active: `/${SLUG}/needs` });
}

function renderOutreachPage() {
  return renderPage(`
<div class="breadcrumb"><a href="/${SLUG}/">Home</a> / Outreach</div>
<div class="card">
<h2>Power Up Your Outreach</h2>
<p style="font-size:16px;color:#555;margin-bottom:20px">Looking to reach more customers, build backlinks, or get your business in front of the right people? We can help with targeted outreach campaigns that get results.</p>

<form id="outreachForm" onsubmit="submitOutreach(event)" style="max-width:600px">
<div style="margin-bottom:16px">
<label style="display:block;font-size:15px;font-weight:600;color:#333;margin-bottom:6px">Your Name</label>
<input type="text" name="name" required style="width:100%;padding:12px;border:1px solid #ccc;border-radius:8px;font-size:16px;font-family:inherit" placeholder="e.g. John Smith">
</div>

<div style="margin-bottom:16px">
<label style="display:block;font-size:15px;font-weight:600;color:#333;margin-bottom:6px">Email Address</label>
<input type="email" name="email" required style="width:100%;padding:12px;border:1px solid #ccc;border-radius:8px;font-size:16px;font-family:inherit" placeholder="e.g. john@example.com">
</div>

<div style="margin-bottom:16px">
<label style="display:block;font-size:15px;font-weight:600;color:#333;margin-bottom:6px">Phone Number</label>
<input type="tel" name="phone" style="width:100%;padding:12px;border:1px solid #ccc;border-radius:8px;font-size:16px;font-family:inherit" placeholder="e.g. 07700 900000">
</div>

<div style="margin-bottom:16px">
<label style="display:block;font-size:15px;font-weight:600;color:#333;margin-bottom:6px">What are you looking for?</label>
<select name="service" style="width:100%;padding:12px;border:1px solid #ccc;border-radius:8px;font-size:16px;font-family:inherit;background:#fff">
<option value="">Select a service...</option>
<option value="link-building">Link Building / Backlinks</option>
<option value="pr-outreach">PR & Press Outreach</option>
<option value="local-citations">Local Citations & Directories</option>
<option value="guest-posting">Guest Posting</option>
<option value="social-outreach">Social Media Outreach</option>
<option value="email-outreach">Email Outreach Campaigns</option>
<option value="other">Other / Not Sure</option>
</select>
</div>

<div style="margin-bottom:20px">
<label style="display:block;font-size:15px;font-weight:600;color:#333;margin-bottom:6px">Tell us more (optional)</label>
<textarea name="message" rows="4" style="width:100%;padding:12px;border:1px solid #ccc;border-radius:8px;font-size:16px;font-family:inherit;resize:vertical" placeholder="What are your goals? Any specific websites or industries you want to target?"></textarea>
</div>

<button type="submit" class="btn" style="width:100%;font-size:17px;padding:14px">Get in Touch</button>
</form>

<div id="outreachSuccess" style="display:none;text-align:center;padding:40px">
<div style="font-size:48px;margin-bottom:16px">✓</div>
<h3 style="font-size:20px;margin-bottom:8px">Thank you!</h3>
<p style="font-size:16px;color:#555">We'll be in touch within 24 hours to discuss your outreach strategy.</p>
</div>
</div>

<script>
async function submitOutreach(e) {
  e.preventDefault();
  const f = e.target;
  const data = {
    name: f.name.value,
    email: f.email.value,
    phone: f.phone.value,
    service: f.service.value,
    message: f.message.value,
    source: 'report-outreach',
    client: '${CLIENT_NAME}',
    domain: '${DOMAIN}'
  };
  try {
    const r = await fetch('/${SLUG}/api/outreach', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (r.ok) {
      f.style.display = 'none';
      document.getElementById('outreachSuccess').style.display = 'block';
    } else {
      alert('Something went wrong. Please try again or email us directly.');
    }
  } catch (err) {
    alert('Something went wrong. Please try again or email us directly.');
  }
}
</script>
`, { title: `Outreach — ${CLIENT_NAME}`, active: `/${SLUG}/outreach` });
}

async function handleRequest(request, env) {
  // Password check
  if (!checkAuth(request)) {
    return new Response(loginPage(), { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  }

  const url = new URL(request.url);
  const path = url.pathname;

  // Logo proxy
  if (path.endsWith('/iceberg-textlogo.png')) {
    const r = await fetch(LOGO_URL);
    return new Response(r.body, { headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=86400' } });
  }

  // Load D1 data
  const checklist = (await env.DB.prepare('SELECT * FROM checklist ORDER BY category, id').all()).results;
  const workLog = (await env.DB.prepare('SELECT * FROM work_log ORDER BY completed_at DESC LIMIT 30').all()).results;
  const data = { checklist, workLog };

  // Load OpenSEO data
  const [gsc, savedKw] = await Promise.all([fetchGscData(), fetchSavedKeywords()]);

  // API: Outreach form submission (must be before page routes)
  if (path.includes('/api/outreach') && request.method === 'POST') {
    try {
      const body = await request.json();
      await env.DB.prepare('INSERT INTO submissions (data) VALUES (?)').bind(JSON.stringify(body)).run();
      return Response.json({ success: true });
    } catch (e) {
      return Response.json({ success: false, error: e.message }, { status: 500 });
    }
  }

  // Routes
  if (path.endsWith('/progress')) return new Response(renderProgressPage(data), { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  if (path.endsWith('/traffic')) return new Response(renderTrafficPage(gsc, savedKw), { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  if (path.endsWith('/gsc')) return new Response(renderGscPage(gsc, savedKw), { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  if (path.endsWith('/work')) return new Response(renderWorkPage(data), { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  if (path.endsWith('/needs')) return new Response(renderNeedsPage(data), { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  if (path.endsWith('/outreach')) return new Response(renderOutreachPage(), { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  
  // API: Outreach form submission
  if (path.includes('/api/outreach') && request.method === 'POST') {
    try {
      const body = await request.json();
      await env.DB.prepare('INSERT INTO submissions (data) VALUES (?)').bind(JSON.stringify(body)).run();
      
      // Send email notification
      try {
        const emailHtml = `
          <h2>New Outreach Enquiry</h2>
          <p><strong>Client:</strong> ${body.client || CLIENT_NAME} (${body.domain || DOMAIN})</p>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Phone:</strong> ${body.phone || 'Not provided'}</p>
          <p><strong>Service:</strong> ${body.service || 'Not specified'}</p>
          <p><strong>Message:</strong> ${body.message || 'No message'}</p>
          <hr>
          <p style="color:#888;font-size:12px">Submitted via ${CLIENT_NAME} report at reports.icebergmedia.co.uk/${SLUG}/outreach</p>
        `;
        await fetch('https://seo-email-sender.iceberg.workers.dev', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: 'alfred@ai4seo.co.uk',
            to: 'hans@icebergmedia.co.uk',
            subject: `New Outreach: ${body.name} — ${CLIENT_NAME}`,
            html: emailHtml
          })
        });
        await fetch('https://seo-email-sender.iceberg.workers.dev', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: 'alfred@ai4seo.co.uk',
            to: 'martin@icebergmedia.co.uk',
            subject: `New Outreach: ${body.name} — ${CLIENT_NAME}`,
            html: emailHtml
          })
        });
      } catch (emailErr) {
        // Don't fail the request if email fails
      }
      
      return Response.json({ success: true });
    } catch (e) {
      return Response.json({ success: false, error: e.message }, { status: 500 });
    }
  }

  return new Response(renderHomepage(data, gsc, null, savedKw), { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
}

export default {
  async fetch(request, env) {
    try {
      return await handleRequest(request, env);
    } catch (err) {
      return new Response('Error: ' + err.message, { status: 500 });
    }
  }
};
