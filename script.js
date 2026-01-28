// Loader
window.addEventListener("load",()=>{
setTimeout(()=>{
document.getElementById("loader").style.display="none";

// SHOW main content immediately
document.querySelector(".reveal").classList.add("active");

},1200);
});

// ===== DSA =====
class Queue{
constructor(){ this.items=[]; }
enqueue(x){ this.items.push(x); }
}

const emailQueue=new Queue();
const emailSet=new Set();

// Email register
function registerEmail(){
const email=document.getElementById("email").value;
const msg=document.getElementById("message");

if(!email.includes("@")){
msg.innerText="Please enter a valid email";
return;
}

if(emailSet.has(email)){
msg.innerText="Email already registered";
return;
}

emailSet.add(email);
emailQueue.enqueue(email);
msg.innerText="Successfully registered!";
document.getElementById("email").value="";
}

// Countdown
const launchDate=new Date("Feb 15, 2026").getTime();

setInterval(()=>{
const now=new Date().getTime();
const diff=launchDate-now;

const d=Math.floor(diff/(1000*60*60*24));
const h=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
const m=Math.floor((diff%(1000*60*60))/(1000*60));
const s=Math.floor((diff%(1000*60))/1000);

document.getElementById("timer").innerHTML=
`${d}d ${h}h ${m}m ${s}s until launch`;

},1000);

// Scroll animation
window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
const top=el.getBoundingClientRect().top;
if(top<window.innerHeight-100){
el.classList.add("active");
}
});
});

// Particles
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");
canvas.width=innerWidth;
canvas.height=innerHeight;

let dots=[];
for(let i=0;i<50;i++){
dots.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2+1,
dx:Math.random()-.5,
dy:Math.random()-.5
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
dots.forEach(d=>{
ctx.beginPath();
ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
ctx.fillStyle="#d4af37";
ctx.fill();

d.x+=d.dx;
d.y+=d.dy;

if(d.x<0||d.x>canvas.width) d.dx*=-1;
if(d.y<0||d.y>canvas.height) d.dy*=-1;
});
requestAnimationFrame(animate);
}
animate();
