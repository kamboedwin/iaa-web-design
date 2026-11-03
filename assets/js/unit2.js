(function(){'use strict';
 const controls=[...document.querySelectorAll('[data-wireframe-choice]')];
 const wireframes={
  library:{brand:'University Library',nav:'Catalogue · Services · Hours · Contact',title:'Search the library catalogue',desc:'Find books, journals and electronic resources.',button:'Search catalogue',cards:['Opening hours','Borrowing guidance','Ask a librarian']},
  records:{brand:'Public Records Centre',nav:'Services · Request a Record · Hours · Contact',title:'How to request an authorised record',desc:'Check eligibility, required documents and service steps.',button:'View request steps',cards:['Eligibility','Service hours','Contact the registry']}
 };
 controls.forEach(btn=>btn.addEventListener('click',()=>{const c=wireframes[btn.dataset.wireframeChoice];if(!c)return;controls.forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));['brand','nav','title','desc','button'].forEach(id=>{document.getElementById('wf-'+id).textContent=c[id];});c.cards.forEach((v,i)=>{document.getElementById('wf-card'+(i+1)).textContent=v;});}));
 const boxes=[...document.querySelectorAll('.audit-check')],out=document.getElementById('audit-score');if(out)boxes.forEach(b=>b.addEventListener('change',()=>{const n=boxes.filter(x=>x.checked).length;out.textContent=n+' of '+boxes.length+' statements selected';}));
})();
