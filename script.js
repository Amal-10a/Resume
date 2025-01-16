// Function to display an alert when a product is added to the cart
function addToCart(productName) {
    alert(productName + " has been added to your cart.");
}
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const themeIcon = document.querySelector(".theme-toggle i");
    themeIcon.classList.toggle("fa-moon");
    themeIcon.classList.toggle("fa-sun");
}
