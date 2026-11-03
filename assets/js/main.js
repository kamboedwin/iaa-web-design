(function(){
 'use strict';
 const toggle=document.querySelector('[data-menu-toggle]');const nav=document.querySelector('[data-main-nav]');
 if(toggle&&nav){toggle.addEventListener('click',()=>{const isOpen=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(isOpen));toggle.textContent=isOpen?'Close menu':'Menu';});}
 document.querySelectorAll('[data-reveal]').forEach(button=>{button.addEventListener('click',()=>{const panel=document.getElementById(button.getAttribute('aria-controls'));if(!panel)return;const show=!panel.classList.contains('open');panel.classList.toggle('open',show);button.setAttribute('aria-expanded',String(show));button.textContent=show?'Hide explanation':'Show explanation';});});
 document.querySelectorAll('[data-print]').forEach(b=>b.addEventListener('click',()=>window.print()));
 const checks=[...document.querySelectorAll('input[data-task]')];if(checks.length){checks.forEach(c=>{try{c.checked=localStorage.getItem('iia-wd-'+c.dataset.task)==='1';}catch(e){};c.addEventListener('change',()=>{try{localStorage.setItem('iia-wd-'+c.dataset.task,c.checked?'1':'0');}catch(e){};update();});});function update(){const done=checks.filter(c=>c.checked).length;const el=document.querySelector('[data-progress-text]');const bar=document.querySelector('[data-progress-bar]');if(el)el.textContent=done+' of '+checks.length+' tasks completed';if(bar)bar.style.width=Math.round(done/checks.length*100)+'%';}update();}
})();
