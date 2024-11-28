// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls the page, execute function
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        // Show the button when user scrolls down 100px
        scrollToTopBtn.style.display = "block";
    } else {
        // Hide the button if the user is not near the bottom
        scrollToTopBtn.style.display = "none";
    }
};

// Scroll to the top of the page when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // This makes the scrolling smooth
    });
}
