const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

loveMe.addEventListener("click", (e)=> {
  if(clickTime === 0){
    clickTime = new Date().getTime()
  }else{
    if((new Date().getTime() - clickTime) < 800){
      createHeart(e)
      clickTime = 0
    }else{
      clickTime = new Date().getTime()
    }
  }
})

const createHeart = (e)=>{
  const heart = document.createElement("i")
  heart.classList.add("fas")
  heart.classList.add('fa-heart');
  loveMe.appendChild(heart)

  const x = e.clientX
  const y = e.clientY

  const leftOffset = e.target.offsetLeft
  const topOffset = e.target.offsetTop

  const xInside = x - leftOffset
  const yInside = y - topOffset

  heart.style.top = `${yInside}px`
  heart.style.left = `${xInside}px`

  times.innerHTML = ++timesClicked
  setTimeout(()=> heart.remove(), 1000)
}

// radio button
const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
  if(good.checked && cheap.checked && fast.checked) {
      if(good === theClickedOne) {
          fast.checked = false
      }

      if(cheap === theClickedOne) {
          good.checked = false
      }

      if(fast === theClickedOne) {
          cheap.checked = false
      }
  }
}