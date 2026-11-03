/* Unit 3 isolated, offline HTML practice. No network requests. */
(function(){
  'use strict';
  const lab=document.querySelector('[data-html-lab]');if(!lab)return;
  const samples=window.IIA_HTML_SAMPLES||{};
  const picker=lab.querySelector('[data-html-sample]'),code=lab.querySelector('[data-html-code]');
  const frame=lab.querySelector('[data-html-preview]'),message=lab.querySelector('[data-html-message]');
  function render(){frame.srcdoc=code.value;message.textContent='Preview updated. Your code stays in this browser.';}
  function reset(){code.value=samples[picker.value]||'';render();}
  picker.addEventListener('change',reset);
  lab.querySelector('[data-html-reset]').addEventListener('click',reset);
  lab.querySelector('[data-html-run]').addEventListener('click',render);
  lab.querySelector('[data-html-download]').addEventListener('click',()=>{
    const file=new Blob([code.value],{type:'text/html;charset=utf-8'});
    const url=URL.createObjectURL(file),a=document.createElement('a');
    a.href=url;a.download='index.html';a.click();setTimeout(()=>URL.revokeObjectURL(url),2000);
    message.textContent='Downloaded index.html. Open it in a browser to check your work.';
  });
  reset();
})();
