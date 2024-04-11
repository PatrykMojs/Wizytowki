document.addEventListener("DOMContentLoaded", function() {
    const expandButton = document.getElementById("expandButton");
    const boom = document.getElementById("boom");
    const gradient = document.querySelector(".Gradient");

    let isExpanded = false;

    expandButton.addEventListener("click", function() {
        if (!isExpanded) {
            boom.classList.add("show");
            gradient.classList.add("show-gradient");
            expandButton.textContent = "Zwiń";
            isExpanded = true;
        } else {
            boom.classList.remove("show");
            gradient.classList.remove("show-gradient");
            expandButton.textContent = "Rozwiń";
            isExpanded = false;
        }
    });
});
