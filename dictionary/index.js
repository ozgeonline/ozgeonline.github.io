const inputEl = document.querySelector("#input");
const infoTextEl = document.querySelector("#info-text");
const meaningContainerEl = document.querySelector("#meaning-container");
const titleEl = document.querySelector("#title");
const meaningEl = document.querySelector("#meaning");
const audioEl = document.querySelector("#audio");

async function fetchAPI(word){
  // console.log(word);

  try {
    infoTextEl.style.display = "block";
    meaningContainerEl.style.display = "none";
    infoTextEl.innerHTML = `Searching the meaning of "${word}"`;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());
    // console.log(result);

    if(result.title){
      meaningContainerEl.style.display = "block";
      infoTextEl.style.display = "none";
      titleEl.innerText = word;
      meaningEl.innerText = "N/A";
      audioEl.style.display ="none";
    }else{
      infoTextEl.style.display = "none";
      meaningContainerEl.style.display = "block";
      audioEl.style.display = "inline-flex";
      titleEl.innerText = result[0].word;
      meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
      audioEl.src = result[0].phonetics[0].audio;
    }

    infoTextEl.style.display = "none";
    meaningContainerEl.style.display = "block";
    titleEl.innerText = result[0].word;
    meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
    audioEl.src = result[0].phonetics[0].audio;
  } catch (error) {
    console.log(error);
    infoTextEl.innerText = `an error happened, try again later`;
  }
 
}

inputEl.addEventListener("keyup",(e) => {
  // console.log(e.key);
  // console.log(e.target.value);
  if(e.target.value && e.key === "Enter"){
    fetchAPI(e.target.value)
  }
});
