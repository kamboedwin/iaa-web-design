(function(){'use strict';
 const box=document.querySelector('[data-u11-matcher]');if(!box)return;
 const select=box.querySelector('#u11-scenario'),result=box.querySelector('[data-u11-answer]');
 const examples={
  books:['Online catalogue / ILS','A catalogue searches organised bibliographic records and helps visitors find library materials.','Use accurate titles, authors, call numbers and location data. Protect patron accounts.'],
  theses:['Digital repository','A repository manages and gives access to approved digital scholarship, such as theses and research articles.','Include creator, title, date, subject and access conditions as metadata.'],
  archives:['Archival description system','A finding aid explains historical collections, creators and relationships among archival materials.','Describe collection context, dates and restrictions; an item may not be digitally available.'],
  controlled:['Electronic records-management system','An ERMS helps authorised staff capture, classify, retrieve, retain and dispose of records under controlled rules.','Enforce staff permissions, audit activity and retention policy.'],
  news:['Content management system','A CMS makes it easier for authorised staff to edit and publish public news or service information.','Use an editorial approval process and keep staff sign-in secure.'],
  guidance:['Information website','Public opening hours and contact information can be presented on a clear, accessible website.','Keep information accurate; avoid collecting personal data unnecessarily.']
 };
 function clear(){const label=document.createElement('h3');label.textContent='Suggested approach: '+examples[select.value][0];const p=document.createElement('p');p.textContent=examples[select.value][1];const q=document.createElement('p');const strong=document.createElement('strong');strong.textContent='Information consideration: ';q.append(strong,document.createTextNode(examples[select.value][2]));result.replaceChildren(label,p,q);}
 box.querySelector('[data-u11-recommend]').addEventListener('click',clear);
 box.querySelector('[data-u11-next]').addEventListener('click',()=>{select.selectedIndex=(select.selectedIndex+1)%select.options.length;result.textContent='Predict the right type of system for this situation, then check the recommendation.';select.focus();});
})();
