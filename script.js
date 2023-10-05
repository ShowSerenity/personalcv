// Get all elements with the class "project-block"
const projectBlocks = document.querySelectorAll(".project-block");

// Add a click event listener to each project block
projectBlocks.forEach((block) => {
    block.addEventListener("click", function () {
        // Get the URL from the "data-url" attribute of the clicked block
        const url = block.getAttribute("data-url");

        // Open the URL in the current window
        window.location.href = url;
    });
});




// Showing tooltip on icon hover

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});




//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}