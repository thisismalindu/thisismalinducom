// Create a new IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      // Add animation class to visible element
      entry.target.classList.add("fade-in");
      entry.target.classList.remove("hidden");
    } else {
      // Remove animation class from hidden element
      entry.target.classList.remove("fade-in");
      entry.target.classList.add("hidden");
    }
  });
});

// Select all h1 elements on the page
const hiddenElements = document.querySelectorAll(".hidden");

// Observe each h1 element
hiddenElements.forEach((element) => observer.observe(element));












// Get the button:
let mybutton = document.querySelector(".go-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

var scrollAmount = 50;
function scrollFunction() {
  if (
    document.body.scrollTop > scrollAmount ||
    document.documentElement.scrollTop > scrollAmount
  ) {
    mybutton.style.right = "0rem";
  } else {
    mybutton.style.right = "-10rem";

  }
}
