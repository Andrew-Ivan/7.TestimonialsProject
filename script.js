async function getQuote() {
  let json = await (await fetch("quotes.json")).json();
  let random = Math.floor(Math.random() * Math.floor(json.quotes.length));

  document.querySelector(".quote").innerText = json.quotes[random].quote;
  document.querySelector(".quote-author").innerText =
    json.quotes[random].author;
}
getQuote();
