(function(){
'use strict';
const input=document.getElementById('u8-css'),frame=document.querySelector('[data-u8-frame]');
if(!input||!frame)return;
const sample=document.getElementById('u8-sample'),shell=document.querySelector('.u8-viewport-shell');
const status=document.querySelector('[data-u8-status]'),wlabel=document.querySelector('[data-u8-width-label]');
const css=`* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; color: #173d47; }
.page { width: 100%; max-width: 980px; margin: auto; padding: 18px; }
header { background: #185e64; color: white; border-radius: 10px; padding: 20px; }
nav { display: flex; flex-wrap: wrap; gap: 12px; margin: 15px 0; }
nav a { color: #14666b; font-weight: bold; }
.services { display: flex; flex-direction: column; gap: 16px; }
.service-card { padding: 18px; border: 1px solid #aacbc7; border-radius: 9px; background: #f0f8f6; flex: 1; }
.service-card h2 { font-size: 1.1rem; margin-top: 0; }
@media (min-width: 720px) {
  .services { flex-direction: row; }
}`;
const collections={library:{title:'Campus Library',sub:'Information services for readers',items:[['Find books','Browse the catalogue and check available titles.'],['Borrowing help','Learn about lending and renewals.'],['Ask a librarian','Find guidance for your study questions.']]},records:{title:'Public Records Centre',sub:'Clear guidance on public information services',items:[['Public enquiries','Learn how to request general information.'],['Access procedures','Find steps for eligible public requests.'],['Retention guidance','Read general records-management guidance.']]}};
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function documentHTML(){const d=collections[sample.value]||collections.library;let cards=d.items.map(([t,p])=>`<article class="service-card"><h2>${esc(t)}</h2><p>${esc(p)}</p></article>`).join('');return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(d.title)}</title><style>${input.value.replace(/<\/style/gi,'<\\/style')}</style></head><body><div class="page"><header><h1>${esc(d.title)}</h1><p>${esc(d.sub)}</p></header><nav aria-label="Services"><a href="#services">Services</a><a href="#contact">Contact</a></nav><main id="services"><h2>Our services</h2><div class="services">${cards}</div></main><footer id="contact"><p>Contact the service desk for more information.</p></footer></div></body></html>`;}
function update(){frame.srcdoc=documentHTML();status.textContent='CSS updated. Compare the page at different preview widths.';}
const sizeButtons=[...document.querySelectorAll('[data-u8-size]')];
function width(pixels){
 const px=Number(pixels); const available=Math.max(180,shell.clientWidth-20); const scale=Math.min(1,available/px);
 frame.style.width=px+'px';frame.style.maxWidth='none';frame.style.height='500px';
 frame.style.transformOrigin='top left';frame.style.transform='scale('+scale+')';
 frame.style.marginLeft=Math.max(0,(available-px*scale)/2)+'px';
 shell.style.height=Math.ceil(500*scale+20)+'px';
 sizeButtons.forEach(b=>{const yes=Number(b.dataset.u8Size)===px;b.classList.toggle('is-active',yes);b.setAttribute('aria-pressed',String(yes));});
 const label=px===360?'Phone':px===768?'Tablet':'Desktop';
 wlabel.textContent='Preview: '+label+' ('+px+' CSS pixels; scaled to fit this panel)';
 status.textContent='Preview width changed. Look for wrapping and the card arrangement.';
}

sizeButtons.forEach(b=>b.addEventListener('click',()=>width(b.dataset.u8Size)));
input.value=css;width(360);update();window.addEventListener('resize',()=>{const active=sizeButtons.find(b=>b.classList.contains('is-active'));if(active)width(active.dataset.u8Size);});
sample.addEventListener('change',()=>{input.value=css;update();});
document.querySelector('[data-u8-render]').addEventListener('click',update);
document.querySelector('[data-u8-reset]').addEventListener('click',()=>{input.value=css;update();});
document.querySelector('[data-u8-full]').addEventListener('click',()=>{const u=URL.createObjectURL(new Blob([documentHTML()],{type:'text/html;charset=utf-8'}));const w=window.open(u,'_blank','noopener');if(!w)status.textContent='Allow pop-ups to open the preview in a new tab.';setTimeout(()=>URL.revokeObjectURL(u),60000);});
document.querySelector('[data-u8-download]').addEventListener('click',()=>{const blob=new Blob([documentHTML()],{type:'text/html;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='responsive-'+sample.value+'.html';document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);});
const box=document.querySelector('[data-u8-challenge]');if(box){const msg=box.querySelector('[data-u8-feedback]');box.querySelector('[data-u8-check]').addEventListener('click',()=>{const c=box.querySelector('input[name="u8-choice"]:checked');msg.textContent=!c?'Choose one answer first.':c.value==='flexible'?'Correct. Flexible sizing, wrapping or stacking allows the cards to fit without reducing readability.':'Try again. Fixed wide cards or tiny text do not solve the layout problem.';});box.querySelector('[data-u8-clear]').addEventListener('click',()=>{box.querySelectorAll('input').forEach(x=>x.checked=false);msg.textContent='Select one response.';});}
})();
