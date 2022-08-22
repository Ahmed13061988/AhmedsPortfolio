"use strict";

const btnJobEl = document.querySelector(".btn--job");
const btnClose = document.querySelector(".close-job");
const btnHobbies = document,querySelector('.btn--hobbies');
const jobDescription = document.querySelector(".job");
const hobbies = document.querySelector('.hobbies');
const overlay = document.querySelector(".overlay");

const closing = function () {
  jobDescription.classList.add("hidden");
  overlay.classList.add("hidden");
};


btnJobEl.addEventListener("click", function () {
  jobDescription.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnHobbies.addEventListener('click', function(){
    hobbies.classList.remove("hidden");
    overlay.classList.remove("hidden");
})

btnClose.addEventListener("click", closing);

overlay.addEventListener("click", closing);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    jobDescription.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
