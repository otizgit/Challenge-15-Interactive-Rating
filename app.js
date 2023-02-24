const numDiv = document.querySelectorAll(".num-div");
const button = document.querySelector(".button");
const numbers = document.querySelector(".numbers");
const container2 = document.querySelector(".container2");
const okay = document.querySelector(".okay");
const span = document.querySelector(".span");

numbers.addEventListener("click", function (e) {
  let target = e.target;
  if (target !== numbers) {
    target.classList.toggle("numbers-active");
    button.addEventListener("click", function () {
      container2.classList.add("display-container");
      span.innerHTML = target.innerText;
    });
    okay.addEventListener("click", function () {
      container2.classList.remove("display-container");
      target.classList.remove("numbers-active");
    });
  }
});

numbers.onclick = function (e) {
  if (e.target !== numbers && e.target !== numDiv[0]) {
    numDiv[0].classList.remove("numbers-active");
  }
  if (e.target !== numbers && e.target !== numDiv[1]) {
    numDiv[1].classList.remove("numbers-active");
  }
  if (e.target !== numbers && e.target !== numDiv[2]) {
    numDiv[2].classList.remove("numbers-active");
  }
  if (e.target !== numbers && e.target !== numDiv[3]) {
    numDiv[3].classList.remove("numbers-active");
  }
  if (e.target !== numbers && e.target !== numDiv[4]) {
    numDiv[4].classList.remove("numbers-active");
  }
};
