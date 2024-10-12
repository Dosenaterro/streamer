document.addEventListener("DOMContentLoaded", function() {
    // Hide the preloader when the page content is fully loade
    window.addEventListener("load", function() {
        const preloader = document.querySelector(".bloc")
        preloader.style.display = "none"
    })
})