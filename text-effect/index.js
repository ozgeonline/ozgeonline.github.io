const containerEl = document.querySelector(".container");
const speedEl = document.getElementById('speed')
let speed = 300 / speedEl.value
const careers = ["Web Developer","Freelancer","Instructor"];

let careersIndex = 0;
let characterIndex = 0;

updateText();

function updateText(){
  characterIndex++;
  containerEl.innerHTML = `<h1>I am ${careers[careersIndex].slice(0,1) === "I" ? "an" : "a"} ${careers[careersIndex].slice(0,characterIndex)}</h1>`
  
  if(characterIndex === careers[careersIndex].length){
    careersIndex++;
    characterIndex = 0;
  }

  if(careersIndex === careers.length){
    careersIndex = 0;
  }

  setTimeout(updateText, speed);
}
speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)
