const containerEl = document.querySelector(".container");
const  popupContainerel = document.querySelector(".popup-container");
const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", () => {
  containerEl.classList.add("active");
  popupContainerel.classList.remove("active");
})

closeIconEl.addEventListener("click", ()=> {
  containerEl.classList.remove('active');
  popupContainerel.classList.add("active");
})
