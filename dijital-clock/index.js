const hourEl = document.querySelector("#hour");
const minutesEl = document.querySelector("#minutes");
const secondEl = document.querySelector("#seconds");
const ampmEl = document.querySelector("#ampm");

function updateclock(){

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if(h > 12){
    h -= 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h:h;
  m = m < 10 ? "0" + m:m;
  s = s < 10 ? "0" + s:s;

  hourEl.innerText = h;
  minutesEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;

  setTimeout(()=>{
    updateclock();
  },1000);
}
updateclock();
