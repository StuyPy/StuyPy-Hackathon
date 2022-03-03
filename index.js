var animationChoice = 0

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (animationChoice == 0) {
                entry.target.classList.add("animate__fadeInLeft")
                animationChoice = 1
            } else {
                entry.target.classList.add("animate__fadeInRight")
                animationChoice = 0
            }
           
        }
    })
})

document.querySelectorAll(".on-scroll-animate").forEach(entry => {
    if (entry) {
        observer.observe(entry)
    }
})

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
