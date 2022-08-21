"use strict";

const btnJobEl = document.querySelector(".btn--job");
const btnClose = document.querySelector(".close-job");
const jobDescription = document.querySelector(".job");
const overlay = document.querySelector(".overlay");

btnJobEl.addEventListener("click", function () {
  jobDescription.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnClose.addEventListener("click", function () {
  jobDescription.classList.add("hidden");
  overlay.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") jobDescription.classList.add("hidden");
});
