function redirectHome() {
    window.location.href = "index.html"; // Replace with your actual home page URL
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting
    alert("Sorry, we are under construction. Please check back later!");
});

document.getElementById("map-btn").addEventListener("click", function () {
    document.getElementById("map").classList.toggle("hidden");
});

document.getElementById("scroll-top").addEventListener("click", function () {
    window.scrollTo({top: 0, behavior: "smooth"});
});

document.getElementById("open-form").addEventListener("click", function() {
    document.getElementById("modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

document.getElementById("trip-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Sorry, we are under construction. Please check back later!");
});


document.getElementById("visitButton").addEventListener("click", function() {
    window.location.href = "places.html";
});
 

