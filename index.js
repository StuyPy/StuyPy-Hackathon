const FRAMES = 9
const SCHEDULE = document.getElementById("schedule-section")
const SCHEDULE_IMAGE = document.getElementById("TESTING-ANIMATION")

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

window.onscroll = function () { onScroll() }

function onScroll() {
    navbarChange()
    scheduleAnimate()
}

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

function scheduleAnimate() {
    var rect = SCHEDULE.getBoundingClientRect()
    var distanceFromTop = rect.top
    var percentageScroll = (distanceFromTop / window.innerHeight) * 100
    var step = 50 / FRAMES

    if (percentageScroll < 0 || percentageScroll > 100) {
        return
    } else {
        if (percentageScroll <= 50) {
            var currentFrame = getFrameFromPercentage(percentageScroll, step)
            SCHEDULE_IMAGE.src = `resources/frames/${currentFrame}.png`
        }
    }
}

function getFrameFromPercentage(percentage, step) {
    return Math.floor(FRAMES - (percentage / step))
}



