
(()=>{if(window.__finalboss)return;window.__finalboss=true;
for(let i=0;i<5;i++)spawn();
addEventListener('click',()=>beep());
function spawn(){let k=document.createElement('img');k.src=chrome.runtime.getURL('kitty.svg');k.className='kitty';document.body.appendChild(k);move(k);setInterval(()=>move(k),1800)}
function move(k){k.style.left=Math.random()*(innerWidth-90)+'px';k.style.top=Math.random()*(innerHeight-90)+'px';}
function beep(){try{new Audio(chrome.runtime.getURL('meow.mp3')).play()}catch(e){}}
document.addEventListener('mousemove',e=>{let s=document.createElement('div');s.className='spark';s.style.left=e.clientX+'px';s.style.top=e.clientY+'px';document.body.appendChild(s);setTimeout(()=>s.remove(),700);});
})();
