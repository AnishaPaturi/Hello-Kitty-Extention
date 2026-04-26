
(function(){
if(window.__kittyLoaded) return; window.__kittyLoaded=true;

const count=6;
for(let i=0;i<count;i++) spawnKitty();
sparkles();
hearts();
meowBanner();

function spawnKitty(){
 const k=document.createElement('img');
 k.src=chrome.runtime.getURL('kitty.svg');
 k.className='kitty';
 reset(k);
 document.body.appendChild(k);
 setInterval(()=>move(k),1800+Math.random()*1400);
}
function reset(k){
 k.style.left=Math.random()*(innerWidth-90)+'px';
 k.style.top=Math.random()*(innerHeight-90)+'px';
}
function move(k){
 k.style.left=Math.random()*(innerWidth-90)+'px';
 k.style.top=Math.random()*(innerHeight-90)+'px';
 k.style.transform='rotate('+(Math.random()*30-15)+'deg) scale('+(0.9+Math.random()*0.3)+')';
}
function sparkles(){
 document.addEventListener('mousemove',e=>{
   const s=document.createElement('div');
   s.className='sparkle';
   s.style.left=e.clientX+'px';
   s.style.top=e.clientY+'px';
   document.body.appendChild(s);
   setTimeout(()=>s.remove(),800);
 });
}
function hearts(){
 setInterval(()=>{
   const h=document.createElement('div');
   h.className='heart';
   h.textContent='❤';
   h.style.left=(Math.random()*innerWidth)+'px';
   h.style.top='-20px';
   document.body.appendChild(h);
   setTimeout(()=>h.remove(),4000);
 },700);
}
function meowBanner(){
 const b=document.createElement('div');
 b.className='kitty-banner';
 b.textContent='🎀 Hello Kitty Deluxe Mode Activated 🎀';
 document.body.appendChild(b);
 setTimeout(()=>b.remove(),5000);
}
})();
