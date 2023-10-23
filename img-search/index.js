const accessKey = "jqB94DCj0LKk93Of6vSeYQmPeQbsdZkW5yTNKSnlWkg";
const formEl = document.querySelector("form");
const searchInputEl = document.querySelector("#search-input");
const searchResultsEl = document.querySelector(".search-results");
const showMoreButtonEl = document.querySelector("#show-more-button");

let inputData = "";
let page = 1;

async function searchImage(){
  
  inputData = searchInputEl.value;
  // console.log(inputData);
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  // console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  if(page === 1){
    searchResultsEl.innerHTML = "";
  }
  const results = data.results;

  results.map((results) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");

    const image = document.createElement("img");
    image.src = results.urls.small;
    image.alt = results.alt_description;

    const imageLink = document.createElement("a");
    imageLink.href = results.links.html;
    imageLink.target="_blank";
    imageLink.textContent = results.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResultsEl.appendChild(imageWrapper);
  });
  page++;

  if(page > 1){
    showMoreButtonEl.style.display = "block";
  }
  // console.log(results);
}
// ?searchImage()--end

formEl.addEventListener("submit", (event)=>{
  event.preventDefault();
  // console.log("Submitted");
  page = 1;
  searchImage();
});
showMoreButtonEl.addEventListener("click", ()=> {
  searchImage();
})
// console.log(page);