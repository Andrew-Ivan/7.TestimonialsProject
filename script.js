let quotes = [
  {
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse",
    stars: 5,
    photo:
      "https://www.duncanaviation.aero/images/news/2020/kruse,%20dennis.jpg",
  },
  {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
    stars: 4,
    photo:
      "https://seancroxton.com/wp-content/uploads/2017/02/napoleonHill.png",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
    stars: 3,
    photo:
      "https://www.laguiadelvaron.com/wp-content/uploads/2015/09/las-últimas-palabras-de-estos-20-famosos-151.jpg",
  },
];

let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let counter = 0;

function renderHandler(i) {
  function stars(i) {
    document
      .querySelectorAll(`.rating>span`)
      .forEach((elem) => (elem.style.color = "#fff"));
    for (let j = 0; j < quotes[i].stars; j++) {
      document.querySelector(`.rating>span:nth-child(${j + 1}`).style.color =
        "#f9df4a";
    }
  }

  function text(i) {
    document.querySelector(".quote-text").innerHTML = quotes[i].quote;
  }

  function author(i) {
    document.querySelector(".quote-author").innerHTML = quotes[i].author;
  }

  function avatar(i) {
    document.querySelector(
      ".author-avatar"
    ).innerHTML = `<img src=${quotes[i].photo} alt="avatarka" />`;
  }

  function render(i) {
    stars(i);
    text(i);
    author(i);
    avatar(i);
  }
  render(i);
}

function nextQuote(i) {
  if (i) {
    if (counter >= quotes.length - 1) {
      counter = 0;
    } else {
      counter++;
    }
  } else {
    if (counter <= 0) {
      counter = quotes.length - 1;
    } else {
      counter--;
    }
  }
}

document.addEventListener("DOMContentLoaded", renderHandler(counter));

document.querySelectorAll("button").forEach((elem) => {
  elem.addEventListener("click", (e) => {
    e.preventDefault();
    nextQuote(e.target.className == "next");
    renderHandler(counter);
  });
});
