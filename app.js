//global variables to grab DOM elements
const containerEl = document.querySelector("#container");
const textEl = document.querySelector("#text");
const audioEl = document.querySelector("audio")
// const iFrameEl = document.querySelector("iframe")
const playBtn = document.querySelector("#play-btn")
const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  //   console.log("Breath IN....");
  textEl.innerText = "Breath IN...";
  containerEl.className = "container grow"
  setTimeout(() => {
    // console.log("HOLD!!");
    textEl.innerText = "HOLD!!";

    setTimeout(() => {
      //   console.log("Breath out.");
      textEl.innerText = "Breath out\n(whoosh)";
      containerEl.className = "container shrink"
    }, holdTime);
  }, breathTime);
}

function play() {
  if (audioEl.paused) {
    audioEl.play()
  } else {
    audioEl.pause();
  }
}

// var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
//   if (!isChrome){
//       iframeEl.remove()
//   }
//   else {
//       audioEl.remove() // just to make sure that it will not have 2x audio in the background 
//   }

// window.onload = function () {
//   audioEl.play();
// }

setInterval(breathAnimation, totalTime);

playBtn.addEventListener("click", play);


