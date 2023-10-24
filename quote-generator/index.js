const btnEl = document.querySelector("#btn");
const quoteEl = document.querySelector("#quote");
const authorEl = document.querySelector("#author");
const apiURL = "https://api.quotable.io/random";

async function getQuote(){
  try {
    btnEl.innerText = "Loading...";
    btnEl.disabled = true;
    quoteEl.innerText = "Updating...";
    authorEl.innerText = "Updating...";

    const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;

    quoteEl.innerText = quoteContent;
    authorEl.innerText = quoteAuthor;

    btnEl.innerText = "Get a quote";
    btnEl.disabled = false;
    console.log(quoteAuthor,quoteContent);
  } catch (error) {
    console.log(error);
    quoteEl.innerText = "An error happened, try again later.";
    authorEl.innerText = "Error!"
  }
}
getQuote(); //!sy yenilendiğinde 
btnEl.addEventListener("click",getQuote);
