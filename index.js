window.onscroll = function(){navbarChange()}

function navbarChange() {
    var navbar = document.getElementById("navbar")
    if (window.scrollY > 200) {
        navbar.classList.add("navbar-filled")
        navbar.classList.remove("navbar-transparent")
    } else {
        navbar.classList.remove("navbar-filled")
        navbar.classList.add("navbar-transparent")
    }
}