"use script";

// added comments to understand the code better

let slideIndex = 1; // 1-based
showSlides(slideIndex); // Initial call to show the first slide

// navigate to a specific slide in the first slider
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// handle dots for the first slider
function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".mySlides"); 
  let dots = document.querySelectorAll(".dot"); // Select all navigation dots
  
  // Loop the index back to the start or end if out of range
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Remove the "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Display the current slide and activate the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// similar to the first slider
let slideIndex2 = 1;
showSlides2(slideIndex2);

function currentSlide2(n) {
  showSlides2((slideIndex2 = n));
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  let dots = document.getElementsByClassName("dot2");
  
  if (n > slides.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex2 - 1].style.display = "block";
  dots[slideIndex2 - 1].className += " active";
}

let slideIndex3 = 1;
showSlides3(slideIndex3);

function currentSlide3(n) {
  showSlides3((slideIndex3 = n));
}

function showSlides3(n) {
  let i;
  let slides = document.querySelectorAll(".mySlides3");
  let dots = document.querySelectorAll(".dot3");
  
  if (n > slides.length) {
    slideIndex3 = 1;
  }
  if (n < 1) {
    slideIndex3 = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex3 - 1].style.display = "block";
  dots[slideIndex3 - 1].className += " active";
}

// Mobile Toggle Button for menu
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle"); // Toggle button
  const navMobile = document.querySelector(".navMobile"); // Mobile navigation menu
  
  // Toggle the "hidden" class to show or hide the menu
  menuToggle.addEventListener("click", function () {
    navMobile.classList.toggle("hidden");
  });
});

// Accordion functionality for expandable sections
document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item"); 
  
  accordionItems.forEach(function (item) {
    const header = item.querySelector(".accordion-header"); 
    
    header.addEventListener("click", function () {
      item.classList.toggle("show"); 
      accordionItems.forEach(function (otherItem) {
        if (otherItem !== item) {
          otherItem.classList.remove("show"); // Collapse other accordion items
        }
      });
    });
  });
});

// Lazy Loading Image
const blurImg = document.querySelector(".blur-load"); // Placeholder for the image
const imgLazy = document.querySelector(".imgLazy"); // Actual image

// Function to apply the "loaded" class when the image has loaded
function loaded() {
  blurImg.classList.add("loaded");
}

// Check if the image is already loaded, otherwise wait for the load event
if (imgLazy.complete) {
  loaded();
} else {
  imgLazy.addEventListener("load", loaded);
}

// Page transition effect
let links = document.getElementsByTagName("a"),
  i = 0,
  l = links.length,
  body = document.body;

// Add a "page-loading" class on click for all links
for (; i < l; i++) {
  links[i].addEventListener(
    "click",
    function () {
      body.className = "page-loading";
      setTimeout(function () {
        body.className = ""; // Remove the class after a delay
      }, 4000); // Delay for the page-loading effect
    },
    false
  );
}

// Add "page-loading" class before the page is unloaded
window.addEventListener(
  "beforeunload",
  function (e) {
    document.body.className = "page-loading";
  },
  false
);
