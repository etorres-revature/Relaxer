//global variables to grab DOM elements
const containerEl = document.querySelector("#container");
const textEl = document.querySelector("#text");

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

setInterval(breathAnimation, totalTime);
