"use strict";

const btnJobEl = document.querySelector(".btn--job");
const btnClose = document.querySelector(".close-job");
const jobDescription = document.querySelector(".job");

btnJobEl.addEventListener("click", function () {
  jobDescription.classList.remove("hidden");
});

btnClose.addEventListener("click", function () {
  jobDescription.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") jobDescription.classList.add("hidden");
});
