// Function to toggle the menu
function toggleMenu() {
    document.querySelector('header .navbar').classList.toggle('nav-toggle');
    document.querySelector('.menu-toggle').classList.toggle('fa-bars');
    document.querySelector('.menu-toggle').classList.toggle('fa-times');
}

// Event listener for the menu toggle button
document.getElementById('menu').addEventListener('click', function() {
    toggleMenu();
});

// Event listener for clicks outside the menu to close it
document.addEventListener('click', function(event) {
    const menu = document.querySelector('header .navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const isClickInsideMenu = menu.contains(event.target) || menuToggle.contains(event.target);
    if (!isClickInsideMenu) {
        menu.classList.remove('nav-toggle');
        menuToggle.classList.remove('fa-times');
        menuToggle.classList.add('fa-bars');
    }
});
