const quoteEl = document.getElementById("quote");

const fetchQuotes = () => {
  return fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then(res => res.json())
    .then(quotes => renderQuote(quotes[0]));
};

const renderQuote = quote => {
  quoteEl.innerText = quote;
};

fetchQuotes();
