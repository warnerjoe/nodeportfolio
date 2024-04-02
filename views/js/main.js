const hamburgerDrawer = document.querySelector(".drawer")

// When anywhere in the hamburger drawer is clicked, it unchecks the checkbox and closes the hamburger menu.
hamburgerDrawer.addEventListener("click", (event) => {
    document.getElementById('hamburger-toggle').checked=false;
});

