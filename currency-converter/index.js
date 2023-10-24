const currencyFirstEl = document.querySelector("#currency-first");
const currencySecondEl = document.querySelector("#currency-second");
const worthFirstEl = document.querySelector("#worth-first");
const worthSecondEl = document.querySelector("#worth-second");
const exchangeRateEl = document.querySelector("#exchange-rate");

updateRate();

function updateRate() {
  fetch(`https://v6.exchangerate-api.com/v6/066dcbad3c0cedafd661b5c9/latest/${currencyFirstEl.value}`).then((res)=>res.json()).then((data)=>{
    const rate = data.conversion_rates[currencySecondEl.value];
    // console.log(data);
    exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate + " " + currencySecondEl.value}`

    worthSecondEl.value = (worthFirstEl.value * rate).toFixed(3)
  })

}

currencyFirstEl.addEventListener("change",updateRate);
currencySecondEl.addEventListener("change",updateRate);
worthFirstEl.addEventListener("input",updateRate);
worthSecondEl.addEventListener("input",updateRate);
