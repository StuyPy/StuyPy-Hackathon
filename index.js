/* Scroll animation constants */
const FRAMES = 9
const SCHEDULE = document.getElementById("schedule-section")
const SCHEDULE_IMAGE = document.getElementById("scroll-animation")
const START_PERCENTAGE = 40
const STEP = START_PERCENTAGE / FRAMES

const STYLESHEET = document.getElementById("theme")
var darkMode = false

const NAVBAR = document.getElementById("navbar")
var animationChoice = 0

/*
IntersecionObserver checks whether an element with the "on-scroll-aniamte" class
has appeared on the page. Once it has, a fadeInLeft or fadeInRight animation is
applied. Adding the class ensures that the animation only happens once.
*/
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

/* change stylesheet to corresponding theme */
function changeTheme() {
    if (darkMode) {
        STYLESHEET.href = "style_light.css"
        darkMode = false
    } else {
        STYLESHEET.href = "style_dark.css"
        darkMode = true
    }
}

/* The navbar and schedule are animated based on scrolling */
window.onscroll = function () { onScroll() }

function onScroll() {
    navbarChange()
    scheduleAnimate()
}

/* Make the navbar opaque if the page is scrolled beyond the landing section */
function navbarChange() {
    if (window.scrollY > 200) {
        navbar.classList.add("navbar-filled")
        navbar.classList.remove("navbar-transparent")
    } else {
        navbar.classList.remove("navbar-filled")
        navbar.classList.add("navbar-transparent")
    }
}

function scheduleAnimate() {
    var rect = SCHEDULE.getBoundingClientRect()
    var distanceFromTop = rect.top
    /* percentageScroll indicates how close the schedule element is to the top of the viewport */
    var percentageScroll = (distanceFromTop / window.innerHeight) * 100

    /* Check if the element is actually on the page */
    if (percentageScroll < 0 || percentageScroll > 100) {
        return
    } else {
        /* 
        If the element is at around START_PERCENTAGE or lower, then its current percentageScroll
        determines the animation's frame. This also lets the animation to be reversed 
        */
        if (percentageScroll <= START_PERCENTAGE) {
            /* Gets the closest frame based on the STEP interval, depending on the current percentageScroll */
            var currentFrame = Math.floor(FRAMES - (percentageScroll / STEP))
            if (currentFrame > 8) {
                currentFrame = 8
            }
            SCHEDULE_IMAGE.src = `resources/frames/${currentFrame}.png`
        }
    }
}



