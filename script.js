const yes = document.getElementById("yes");
const no = document.getElementById("no");
const success = document.getElementById("success");

function moveNo(){

  no.style.position = "fixed";

  const maxX = window.innerWidth - no.offsetWidth - 20;
  const maxY = window.innerHeight - no.offsetHeight - 20;

  no.style.left =
    Math.max(10, Math.random() * maxX) + "px";

  no.style.top =
    Math.max(10, Math.random() * maxY) + "px";
}

no.addEventListener("mouseenter", moveNo);
no.addEventListener("touchstart", moveNo);

yes.addEventListener("click", () => {

  document.querySelector(".message").style.display = "none";
  document.querySelector("h2").style.display = "none";
  document.querySelector(".cute").style.display = "none";
  document.querySelector(".buttons").style.display = "none";

  success.style.display = "block";

  for(let i=0;i<60;i++){

    setTimeout(createHeart,i*45);

  }

});

function createHeart(){

  const heart = document.createElement("div");

  const hearts = ["❤️","💕","💗","💖","💘"];

  heart.className = "floating-heart";

  heart.innerHTML =
    hearts[Math.floor(Math.random()*hearts.length)];

  heart.style.left =
    Math.random()*100 + "vw";

  heart.style.fontSize =
    15 + Math.random()*30 + "px";

  heart.style.animationDuration =
    3 + Math.random()*4 + "s";

  document.body.appendChild(heart);

  setTimeout(()=>{
    heart.remove();
  },7000);
}

// Continuous soft background hearts

setInterval(()=>{

  if(Math.random() > .35){
    createHeart();
  }

},700);
const romanticTexts = [
  "You've been on my mind lately... ❤️",
  "Your smile is kinda addictive.",
  "I love our random conversations.",
  "You make ordinary moments feel special.",
  "And honestly...",
  "I'd really like another memory with you. ✨"
];

let textIndex = 0;

setInterval(() => {

  const text = document.getElementById("changingText");

  text.style.opacity = 0;

  setTimeout(() => {

    textIndex =
      (textIndex + 1) % romanticTexts.length;

    text.textContent =
      romanticTexts[textIndex];

    text.style.opacity = 1;

  }, 400);

}, 2400);
