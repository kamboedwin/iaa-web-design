/* Unit 4: local-only HTML experiment and path exercise. */
(function(){
 'use strict';
 const lab=document.querySelector('[data-unit4-lab]');
 if(lab){
  const samples={"library": "<!DOCTYPE html>\n<html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>Community Library | Home</title></head><body>\n<header><h1>Community Library</h1><nav aria-label=\"Main navigation\"><a href=\"index.html\" aria-current=\"page\">Home</a> | <a href=\"pages/services.html\">Services</a> | <a href=\"pages/contact.html\">Contact</a></nav></header>\n<main><h2>Welcome</h2><p>Explore our fictional library services and learning resources.</p>\n<figure><img src=\"assets/img/reading-room.svg\" alt=\"Illustration of a quiet library reading area with bookshelves\" width=\"500\" height=\"250\"><figcaption>Illustration of a library reading space.</figcaption></figure>\n<h2 id=\"highlights\">Service highlights</h2><ul><li>Reading spaces</li><li>Reference support</li><li>Library orientation</li></ul>\n<p><a href=\"pages/services.html\">Explore library services</a></p></main><footer><p>Learning example only — no real borrower details.</p></footer>\n</body></html>", "records": "<!DOCTYPE html>\n<html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>Community Records Centre | Home</title></head><body>\n<header><h1>Community Records Centre</h1><nav aria-label=\"Main navigation\"><a href=\"index.html\" aria-current=\"page\">Home</a> | <a href=\"pages/services.html\">Services</a> | <a href=\"pages/contact.html\">Contact</a></nav></header>\n<main><h2>Welcome</h2><p>Explore our fictional public records-centre guidance and service information.</p>\n<figure><img src=\"assets/img/reading-room.svg\" alt=\"Illustration of a public records reading area with storage shelves\" width=\"500\" height=\"250\"><figcaption>Illustration of a records reading space.</figcaption></figure>\n<h2 id=\"highlights\">Service highlights</h2><ul><li>Public enquiry desk</li><li>Access guidance</li><li>Records centre information</li></ul>\n<p><a href=\"pages/services.html\">Explore records services</a></p></main><footer><p>Learning example only — no real personal records.</p></footer>\n</body></html>"};
  const picker=lab.querySelector('[data-unit4-sample]'),editor=lab.querySelector('[data-unit4-code]');
  const frame=lab.querySelector('[data-unit4-preview]'),status=lab.querySelector('[data-unit4-status]');
  function render(){frame.srcdoc=editor.value.replaceAll('assets/img/reading-room.svg','data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MDAgMjUwIiByb2xlPSJpbWciIGFyaWEtbGFiZWxsZWRieT0idCI+PHRpdGxlIGlkPSJ0Ij5GaWN0aW9uYWwgaW5mb3JtYXRpb24gcmVhZGluZyByb29tPC90aXRsZT48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjI1MCIgZmlsbD0iI2U1ZjNmMCIvPjxyZWN0IHg9IjIyIiB5PSIzMCIgd2lkdGg9IjQ1NSIgaGVpZ2h0PSIxNzAiIHJ4PSIxMCIgZmlsbD0iI2MzZDdkMiIvPjxyZWN0IHg9IjQ1IiB5PSI1OCIgd2lkdGg9IjEwNiIgaGVpZ2h0PSIxMTciIHJ4PSI0IiBmaWxsPSIjMTczZTQ5Ii8+PHJlY3QgeD0iMTc1IiB5PSI1OCIgd2lkdGg9IjEwNiIgaGVpZ2h0PSIxMTciIHJ4PSI0IiBmaWxsPSIjMTczZTQ5Ii8+PHJlY3QgeD0iMzA1IiB5PSI1OCIgd2lkdGg9IjEzNSIgaGVpZ2h0PSIxMTciIHJ4PSI0IiBmaWxsPSIjMTczZTQ5Ii8+PGcgc3Ryb2tlPSIjZWFjNjZlIiBzdHJva2Utd2lkdGg9IjEwIj48cGF0aCBkPSJNNjAgNjV2OTIgTTgzIDY1djkyIE0xMDYgNjV2OTIgTTEyOSA2NXY5MiBNMTg5IDY1djkyIE0yMTIgNjV2OTIgTTIzNSA2NXY5MiBNMjU4IDY1djkyIE0zMjIgNjV2OTIgTTM0OCA2NXY5MiBNMzc2IDY1djkyIE00MDQgNjV2OTIiLz48L2c+PHJlY3QgeD0iNzAiIHk9IjE4NCIgd2lkdGg9IjM2MCIgaGVpZ2h0PSIyMyIgcng9IjUiIGZpbGw9IiM5ZTc3NjEiLz48cGF0aCBkPSJNMTA1IDIwNnYzNCBNMzk1IDIwNnYzNCIgc3Ryb2tlPSIjMTczZTQ5IiBzdHJva2Utd2lkdGg9IjEyIi8+PHRleHQgeD0iMjUwIiB5PSIyNCIgZm9udC1mYW1pbHk9IkFyaWFsLHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMxNzNlNDkiPkZpY3Rpb25hbCBJbmZvcm1hdGlvbiBTZXJ2aWNlcyBSZWFkaW5nIFJvb208L3RleHQ+PC9zdmc+');status.textContent='Preview updated. Your HTML remains on your device. To test links between pages, open the downloaded starter website.';}
  function reset(){editor.value=samples[picker.value]||'';render();}
  picker.addEventListener('change',reset);
  lab.querySelector('[data-unit4-reset]').addEventListener('click',reset);
  lab.querySelector('[data-unit4-run]').addEventListener('click',render);
  lab.querySelector('[data-unit4-download]').addEventListener('click',()=>{
   const blob=new Blob([editor.value],{type:'text/html;charset=utf-8'}),url=URL.createObjectURL(blob);
   const a=document.createElement('a');a.href=url;a.download='index.html';a.click();setTimeout(()=>URL.revokeObjectURL(url),3000);
   status.textContent='Downloaded index.html. Save it alongside the expected folders before testing its links.';
  });
  reset();
 }
 const challenge=document.querySelector('[data-unit4-pathcheck]');if(!challenge)return;
 const feedback=challenge.querySelector('[data-path-feedback]');
 challenge.querySelector('[data-path-check]').addEventListener('click',()=>{
  const choice=challenge.querySelector('input[name="u4-path"]:checked');
  if(!choice){feedback.textContent='Choose an answer first.';return;}
  feedback.textContent=choice.value==='b'?'Correct. ../ goes from pages/ to the parent folder containing index.html.':'Not quite. The current file is inside pages/, so you must go up one folder first. The correct path is ../index.html.';
 });
 challenge.querySelector('[data-path-reset]').addEventListener('click',()=>{
  challenge.querySelectorAll('input[name="u4-path"]').forEach(x=>x.checked=false);
  feedback.textContent='Choose a path, then check your answer.';
 });
})();