
(()=>{if(window.__godkitty)return;window.__godkitty=true;
for(let i=0;i<4;i++)spawn();
mouseSparkle();
function spawn(){
 let k=document.createElement('img');
 k.src=chrome.runtime.getURL('kitty.svg');
 k.className='kitty';
 document.body.appendChild(k);
 move(k);setInterval(()=>move(k),2200);
}
function move(k){
 k.style.left=Math.random()*(innerWidth-90)+'px';
 k.style.top=Math.random()*(innerHeight-90)+'px';
}
function mouseSparkle(){
 addEventListener('mousemove',e=>{
  let s=document.createElement('div');
  s.className='sparkle';
  s.style.left=e.clientX+'px'; s.style.top=e.clientY+'px';
  document.body.appendChild(s);
  setTimeout(()=>s.remove(),700);
 });
}
})();
