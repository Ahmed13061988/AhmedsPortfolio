"use strict";

const btnJobEl = document.querySelector(".btn--job");
const btnCloseJob = document.querySelector(".close-job");
const btnCloseHobbies = document.querySelector(".close-hobbies");
const btnHobbies = document.querySelector(".btn--hobbies");
const jobDescription = document.querySelector(".job");
const hobbies = document.querySelector(".hobbies");
const overlay = document.querySelector(".overlay");

// const closing = function () {
//   jobDescription.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

btnJobEl.addEventListener("click", function () {
  jobDescription.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnHobbies.addEventListener("click", function () {
  hobbies.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnCloseJob.addEventListener("click", function () {
  jobDescription.classList.add("hidden");
  overlay.classList.add("hidden");
});
btnCloseHobbies.addEventListener("click", function () {
  hobbies.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  hobbies.classList.add("hidden");
  jobDescription.classList.add("hidden");
  overlay.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    jobDescription.classList.add("hidden");
    hobbies.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
