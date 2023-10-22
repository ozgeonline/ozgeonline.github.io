const questions = document.querySelectorAll(".question");

questions.forEach((question)=>{
  const btn= question.querySelector('.question-btn');
  btn.addEventListener("click", () => {
    question.classList.toggle("show-text");
    question.style.transition = ".4s"
  })
})