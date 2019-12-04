const quoteEl = document.getElementById("quote");
const imgEl = document.getElementById("kitten-img");
const btnEl = document.getElementById("next-btn");

const fetchQuotes = () => {
  return fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then(res => res.json())
    .then(quotes => renderQuote(quotes[0]));
};

const fetchKittens = () => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then(resp => resp.json())
    .then(data => (imgEl.src = data[0].url));
};

btnEl.addEventListener("click", () => {
  fetchKittens();
  fetchQuotes();
});

const renderQuote = quote => {
  quoteEl.innerText = quote;
};

fetchQuotes();
fetchKittens();
