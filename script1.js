document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const placeCards = document.querySelectorAll(".place-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            placeCards.forEach(card => {
                if (category === "all" || card.getAttribute("data-category") === category) {
                    card.style.display = "block"; // Show matching cards
                } else {
                    card.style.display = "none"; // Hide others
                }
            });

            // Move the first matching image to the top
            const firstVisibleImage = document.querySelector(`.place-card[data-category='${category}'] img`);
            if (firstVisibleImage) {
                firstVisibleImage.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
 