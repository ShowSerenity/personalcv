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