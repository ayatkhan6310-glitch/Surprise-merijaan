function login() {

let password = document.getElementById("pass").value;

if(password === "17.05.2026"){

document.getElementById("passwordPage").style.display="none";
document.getElementById("main").style.display="block";

}else{

alert("Wrong Password ❤️");

}

}
// PASSWORD

function login(){

let password=document.getElementById("pass").value;

if(password==="17.05.2026"){

document.getElementById("passwordPage").style.display="none";
document.getElementById("main").style.display="block";

}
else{

alert("Wrong Password ❤️");

}

}



// RELATIONSHIP TIMER

const startDate=new Date("2023-01-14T00:00:00");

function updateCounter(){

const now=new Date();

let diff=now-startDate;

let days=Math.floor(diff/(1000*60*60*24));

let years=Math.floor(days/365);

days=days%365;

let months=Math.floor(days/30);

days=days%30;

document.getElementById("counter").innerHTML=

years+" Years ❤️ "+months+" Months ❤️ "+days+" Days";

}

setInterval(updateCounter,1000);

updateCounter();



// FADE ANIMATION

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(100px)";

sec.style.transition="1s";

observer.observe(sec);

});




// FLOATING HEARTS

setInterval(()=>{

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="999";

heart.style.transition="6s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.top="-100px";

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},6000);

},600);




// TITLE BLINK

let titles=[

"❤️ My Jaan ❤️",

"Happy Girlfriend's Day ❤️",

"I Love You ❤️"

];

let i=0;

setInterval(()=>{

document.title=titles[i];

i++;

if(i>=titles.length){

i=0;

}

},2500);




// SMOOTH IMAGE ZOOM

const images=document.querySelectorAll("img");

images.forEach(img=>{

img.addEventListener("mouseover",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseout",()=>{

img.style.transform="scale(1)";

});

});

/* ==========================
      STARS
========================== */

let starBox=document.getElementById("stars");

for(let i=0;i<300;i++){

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*3+"s";

star.style.opacity=Math.random();

starBox.appendChild(star);

}



/* ==========================
      HEARTS
========================== */

setInterval(()=>{

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*30)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},500);

/* =====================
PROGRESS BAR
===================== */

window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let width=(scrollTop/height)*100;

document.getElementById("progressBar").style.width=width+"%";

});

const message=`

Dear My Jaan ❤️

14 January 2023...

Ek normal si chat...

Aur pata hi nahi chala...

Kab tum meri duniya ban gayi.

Jab bhi tum pyaar se baat karti ho...

Mujhe lagta hai Allah ne meri dua qubool kar li.

Main wada karta hu...

Main bahut mehnat karunga...

Ek din successful banunga...

Aur sabse pehle tumse Nikah karunga.

Chahe kitni bhi dooriyan aaye...

Main sirf tumhara hu.

I Love You Forever ❤️

~ Mohd Samad Khan

`;

let pos=0;

function typing(){

if(pos<message.length){

document.getElementById("typewriter").innerHTML+=message.charAt(pos);

pos++;

setTimeout(typing,45);

}

}

typing();

/* ======================
AUTO SLIDER
====================== */

let slide=document.querySelector(".slides");

let index=0;

setInterval(()=>{

index++;

if(index>=10){

index=0;

}

slide.style.transform="translateX(-"+(index*10)+"%)";

},3000);

function confetti(){

for(let i=0;i<200;i++){

let c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.background="hsl("+Math.random()*360+",100%,60%)";

c.style.animationDuration=(3+Math.random()*3)+"s";

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},6000);

}

}

function shootingStar(){

let star=document.createElement("div");

star.className="shooting-star";

star.style.left=Math.random()*50+"vw";

star.style.top=Math.random()*30+"vh";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},2000);

}

setInterval(shootingStar,4000);

function explodeHearts(){

for(let i=0;i<80;i++){

let h=document.createElement("div");

h.innerHTML="❤️";

h.style.position="fixed";

h.style.left="50%";

h.style.top="50%";

h.style.fontSize=(20+Math.random()*30)+"px";

h.style.transition="2s";

document.body.appendChild(h);

let x=(Math.random()-0.5)*900;

let y=(Math.random()-0.5)*900;

setTimeout(()=>{

h.style.transform=`translate(${x}px,${y}px)`;

h.style.opacity=0;

},100);

setTimeout(()=>{

h.remove();

},2000);

}

}

function playMusic() {
    document.getElementById("bgMusic").play();
}
