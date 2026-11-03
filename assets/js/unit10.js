/* Unit 10 interactive introductory JavaScript examples. */
(function () {
  'use strict';
  const demo = document.querySelector('[data-u10-demos]');
  if (demo) {
    const context = demo.querySelector('#u10-context');
    const message = demo.querySelector('[data-u10-message]');
    const clickCount = demo.querySelector('[data-u10-counter]');
    const entry = demo.querySelector('#u10-entry');
    const entryStatus = demo.querySelector('[data-u10-entry-status]');
    let count = 0;
    demo.querySelector('[data-u10-reveal]').addEventListener('click', function () {
      message.textContent = context.value === 'library'
        ? 'Library: Ask at the circulation desk for assistance with a book request.'
        : 'Records centre: Check the public enquiry guidelines before submitting a request.';
    });
    demo.querySelector('[data-u10-count]').addEventListener('click', function () {
      count += 1;
      clickCount.textContent = 'Number of clicks: ' + count;
    });
    demo.querySelector('[data-u10-check]').addEventListener('click', function () {
      const val = entry.value.trim();
      entryStatus.textContent = val.length >= 3
        ? 'Practice entry accepted: ' + val + '. Nothing has been submitted or saved.'
        : 'Enter at least three characters. This is a demonstration, not an official request.';
    });
    context.addEventListener('change', function () {
      message.textContent = 'Select Show guidance.';
      count = 0;
      clickCount.textContent = 'Number of clicks: 0';
      entry.value = '';
      entryStatus.textContent = 'Enter a fictional reference and select Check entry.';
    });
  }
  const lab = document.querySelector('[data-u10-lab]');
  if (!lab) return;
  const select = lab.querySelector('#u10-sample');
  const htmlField = lab.querySelector('#u10-html');
  const jsField = lab.querySelector('#u10-js');
  const frame = lab.querySelector('[data-u10-preview]');
  const status = lab.querySelector('[data-u10-lab-status]');
  const examples = {
    library: {
      html: '<h2>Community Library</h2>\n<p>Find helpful information about visiting.</p>\n<button id="showInfo" type="button">Show opening hours</button>\n<p id="output" aria-live="polite">Select the button above.</p>',
      js: 'const button = document.getElementById("showInfo");\nconst output = document.getElementById("output");\nbutton.addEventListener("click", function () {\n  output.textContent = "Open Monday–Friday, 08:00–17:00";\n});'
    },
    records: {
      html: '<h2>Public Records Centre</h2>\n<p>Learn how to request general information.</p>\n<button id="showInfo" type="button">Show request guidance</button>\n<p id="output" aria-live="polite">Select the button above.</p>',
      js: 'const button = document.getElementById("showInfo");\nconst output = document.getElementById("output");\nbutton.addEventListener("click", function () {\n  output.textContent = "Enquire at the public information desk.";\n});'
    },
    counter: {
      html: '<h2>Service Desk</h2>\n<button id="add" type="button">Count a visitor</button>\n<p id="output" aria-live="polite">Visitors counted: 0</p>',
      js: 'let visitors = 0;\nconst button = document.getElementById("add");\nconst output = document.getElementById("output");\nbutton.addEventListener("click", function () {\n  visitors = visitors + 1;\n  output.textContent = "Visitors counted: " + visitors;\n});'
    }
  };
  function htmlDocument() {
    // The preview is sandboxed; code does not access the course page.
    const scriptText = jsField.value.replace(/<\/script/gi, '<\\/script');
    return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font-family:system-ui,Arial,sans-serif;padding:23px;color:#12333d;line-height:1.55;overflow-wrap:anywhere}button{background:#125567;color:#fff;border:0;border-radius:8px;padding:12px 16px;cursor:pointer;font:inherit}button:focus-visible{outline:3px solid #ddaf4f;outline-offset:3px}p{max-width:35rem}</style></head><body>' + htmlField.value + '<script>\n' + scriptText + '\n<\/script></body></html>';
  }
  function runPreview() {
    frame.srcdoc = htmlDocument();
    status.textContent = 'Preview updated. Select the button inside the preview to test its response.';
  }
  function resetExample() {
    const example = examples[select.value] || examples.library;
    htmlField.value = example.html;
    jsField.value = example.js;
    runPreview();
  }
  select.addEventListener('change', resetExample);
  lab.querySelector('[data-u10-reset]').addEventListener('click', resetExample);
  lab.querySelector('[data-u10-run]').addEventListener('click', runPreview);
  lab.querySelector('[data-u10-save]').addEventListener('click', function () {
    const blob = new Blob([htmlDocument()], {type: 'text/html;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-javascript-example.html';
    a.click();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    status.textContent = 'Your HTML example has been prepared for download.';
  });
  resetExample();
})();
