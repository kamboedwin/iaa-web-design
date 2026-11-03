(function(){
 'use strict';
 const lab=document.querySelector('#u7-css');if(!lab)return;
 const sample=document.querySelector('#u7-sample'),frame=document.querySelector('[data-u7-frame]');
 const status=document.querySelector('[data-u7-status]'),htmlText=document.querySelector('[data-u7-html-text]');
 const pages={
 library:'<header><h1>Community Library</h1><p>Helping readers find information.</p></header><main><p class="notice">Opening hours: Monday–Friday, 8 am–5 pm.</p><section class="service-card"><h2>Find a book</h2><p>Browse the sample catalogue.</p><a href="#catalogue">View catalogue details</a></section><section class="service-card" id="catalogue"><h2>Reference services</h2><p>Ask about sources for your research.</p></section></main>',
 records:'<header><h1>Public Records Centre</h1><p>Guidance for visitors.</p></header><main><p class="notice">Access depends on the relevant public records policy.</p><section class="service-card"><h2>Public records guide</h2><p>Read instructions for viewing public records.</p><a href="#enquiries">Learn about enquiries</a></section><section class="service-card" id="enquiries"><h2>Records enquiries</h2><p>Ask about published records and public procedures.</p></section></main>'};
 const starting=`body { font-family: Arial, sans-serif; line-height: 1.6; color: #203844; background-color: #f5f8f6; margin: 0; }
header { background-color: #155660; color: white; padding: 24px; }
header h1 { color: #ffffff; font-size: 32px; margin: 0 0 8px; }
main { padding: 20px; }
.service-card { background-color: white; border: 1px solid #b7d6ce; padding: 16px; margin: 16px 0; border-radius: 9px; }
.service-card h2 { color: #126c66; }
.notice { background-color: #fff0c6; padding: 12px; }
a { color: #126c66; }`;
 let css='';
 const doc=()=>{const safeCSS=lab.value.replace(/<\/style/gi,'<\\/style');return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CSS study page</title><style>'+safeCSS+'</style></head><body>'+pages[sample.value]+'</body></html>';};
 function show(){frame.srcdoc=doc();htmlText.textContent=pages[sample.value];status.textContent='Preview updated. Compare the heading, background, links and service cards.';}
 function reset(){lab.value=starting;show();}
 document.querySelector('[data-u7-render]').addEventListener('click',show);
 document.querySelector('[data-u7-reset]').addEventListener('click',reset);
 sample.addEventListener('change',reset);
 document.querySelector('[data-u7-download]').addEventListener('click',()=>{const blob=new Blob([doc()],{type:'text/html;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='styled-service-page.html';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
 const quiz=document.querySelector('[data-u7-challenge]');if(quiz){const feedback=quiz.querySelector('[data-u7-feedback]');quiz.querySelector('[data-u7-check]').addEventListener('click',()=>{const ans=quiz.querySelector('input[name="u7-choice"]:checked');feedback.textContent=!ans?'Choose one answer first.':ans.value==='green'?'Correct. A class selector is more specific than an element selector in this example.':'Try again. Compare the specificity of .notice and p.';});quiz.querySelector('[data-u7-clear]').addEventListener('click',()=>{quiz.querySelectorAll('input[name="u7-choice"]').forEach(x=>x.checked=false);feedback.textContent='Select an answer to check your understanding.';});}
 reset();
})();