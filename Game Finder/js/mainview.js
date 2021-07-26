let cards = document.querySelectorAll(".main__card");
let searchInput = document.querySelector(".header__search-box-input");

function horizontalView() {
  document.querySelector(".main__catalog").classList.add("--horizontal");
  cards.forEach((element) => {
    element.classList.add("--horizontal");
  });
}

function gridView() {
  document.querySelector(".main__catalog").classList.remove("--horizontal");
  cards.forEach((element) => {
    element.classList.remove("--horizontal");
  });
}

// Search suggestions display classes
searchInput.addEventListener("click", function () {
  document
    .querySelector(".header__search-box")
    .classList.add("--display-suggestions");
});
searchInput.addEventListener("focus", function () {
  document
    .querySelector(".header__search-box")
    .classList.add("--display-suggestions");
});
searchInput.addEventListener("blur", function () {
  document
    .querySelector(".header__search-box")
    .classList.remove("--display-suggestions");
});
