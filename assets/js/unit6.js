/* Unit 6 interactive learning activities. This preview does not send data. */
(() => {
  'use strict';
  const editor=document.getElementById('u6-editor');
  const picker=document.getElementById('u6-example');
  const preview=document.querySelector('[data-u6-frame]');
  const status=document.querySelector('[data-u6-status]');
  const examples={"library": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Library Book Request</title>\n</head>\n<body>\n  <h1>Library Book Request</h1>\n  <p>Complete the sample form using fictional information.</p>\n  <form action=\"#\" method=\"get\">\n    <p><label for=\"book\">Book title</label><br>\n    <input id=\"book\" name=\"book\" type=\"text\" required></p>\n    <p><label for=\"email\">Contact email</label><br>\n    <input id=\"email\" name=\"email\" type=\"email\" required></p>\n    <fieldset>\n      <legend>Preferred collection point</legend>\n      <label><input type=\"radio\" name=\"point\" value=\"main\" checked> Main library</label>\n      <label><input type=\"radio\" name=\"point\" value=\"branch\"> Branch library</label>\n    </fieldset>\n    <p><label for=\"note\">Additional note (optional)</label><br>\n    <textarea id=\"note\" name=\"note\" rows=\"3\"></textarea></p>\n    <button type=\"submit\">Request book</button>\n  </form>\n</body>\n</html>", "records": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Public Records Enquiry</title>\n</head>\n<body>\n  <h1>Public Records Enquiry</h1>\n  <p>This practice form uses invented references only.</p>\n  <form action=\"#\" method=\"get\">\n    <p><label for=\"ref\">Public reference code</label><br>\n    <input id=\"ref\" name=\"reference\" type=\"text\" placeholder=\"DEMO-101\" required></p>\n    <p><label for=\"category\">Enquiry category</label><br>\n    <select id=\"category\" name=\"category\" required>\n      <option value=\"\">Choose a category</option>\n      <option value=\"reports\">Public reports</option>\n      <option value=\"policies\">Published policies</option>\n      <option value=\"guides\">Service guides</option>\n    </select></p>\n    <p><label for=\"details\">Question</label><br>\n    <textarea id=\"details\" name=\"details\" rows=\"4\" required></textarea></p>\n    <p><label><input type=\"checkbox\" name=\"sample\" required>\n      I have used fictional information.</label></p>\n    <button type=\"submit\">Send enquiry</button>\n  </form>\n</body>\n</html>"};
  if(editor && picker && preview){
    function loadExample(){
      editor.value=examples[picker.value]||examples.library;
      updatePreview();
    }
    function updatePreview(){
      preview.srcdoc=editor.value;
      status.textContent='Preview updated. Try a labelled field or a required input; requests are not sent or stored.';
    }
    picker.addEventListener('change',loadExample);
    document.querySelector('[data-u6-reset]')?.addEventListener('click',loadExample);
    document.querySelector('[data-u6-render]')?.addEventListener('click',updatePreview);
    document.querySelector('[data-u6-download]')?.addEventListener('click',()=>{
      const blob=new Blob([editor.value],{type:'text/html;charset=utf-8'});
      const url=URL.createObjectURL(blob);
      const a=document.createElement('a');a.href=url;a.download=picker.value==='records'?'records-enquiry.html':'library-request.html';
      document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
      status.textContent='Your HTML file has been prepared for saving.';
    });
    loadExample();
  }
  const area=document.querySelector('[data-u6-challenge]');
  if(area){
    const feedback=area.querySelector('[data-u6-feedback]');
    area.querySelector('[data-u6-check]')?.addEventListener('click',()=>{
      const checked=area.querySelector('input[name="u6-choice"]:checked');
      if(!checked){feedback.textContent='Choose one answer first.';return;}
      feedback.textContent=checked.value==='radio' ?
        'Correct. Radio buttons sharing the same name allow exactly one selection from the group.' :
        'Not quite. Choose radio buttons with the same name when the visitor must select exactly one option.';
    });
    area.querySelector('[data-u6-try]')?.addEventListener('click',()=>{
      area.querySelectorAll('input[name="u6-choice"]').forEach(input=>input.checked=false);
      feedback.textContent='Select the most suitable control and check your answer.';
    });
  }
})();
