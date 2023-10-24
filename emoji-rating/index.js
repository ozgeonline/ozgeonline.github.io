const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".far");
const colorsarray = ["#fd151b", "#ff5400","#390099","#ff0054","#29bf12"];

updateRating(0);

starsEl.forEach((starEl,index) => {
  starEl.addEventListener("click", ()=> {
    // console.log("clicked",index);
    updateRating(index);
  });
});

function updateRating(index){
  starsEl.forEach((starEl, idx) =>{
    if (idx < index + 1){
      starEl.classList.add('active');
    }else{
      starEl.classList.remove('active');
    }
  });

  emojisEl.forEach((emojiEl) => {
    emojiEl.style.transform = `translateX(-${index * 50}px)`;
    emojiEl.style.color = colorsarray[index];
  });

  
}
