"use strict";

var nav = document.querySelector(".page-header__nav"),
  navToggle = document.querySelector(".nav-site__toggle");

// // Remove menu without js and add menu closed

nav.classList.remove("nav-site--nojs");
nav.classList.add("nav-site--closed");

// // Open and closed mobile menu

navToggle.addEventListener("click", function() {
  if (nav.classList.contains("nav-site--closed")) {
    nav.classList.remove("nav-site--closed");
    nav.classList.add("nav-site");
  } else {
    nav.classList.remove("nav-site");
    nav.classList.add("nav-site--closed");
  }
});
