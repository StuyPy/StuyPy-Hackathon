/* Scroll animation constants */
const FRAMES = 9
const SCHEDULE = document.getElementById("schedule-section")
const SCHEDULE_IMAGE = document.getElementById("scroll-animation")
const START_PERCENTAGE = 40
const STEP = START_PERCENTAGE / FRAMES

const NAVBAR = document.getElementById("navbar")

// ** CHANGE SPECIFIC DATE ** //
const HACKATHON_DATE = new Date(2022, 5, 2, 1, 2, 3).getTime() // june 2nd at 1:02:03 ET

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

/* Countdown timer */

// updates every second
var intervalID = setInterval(updateTimer, 1)


function updateTimer(){ 
    console.log("hi")
    var today = new Date().getTime() 

    var timeDiff = HACKATHON_DATE - today // time diff in milleseconds

    var timeDiffDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
    var timeDiffHours = Math.floor((timeDiff % (timeDiffDays / timeDiff)) / (1000 * 60 * 60));
    var timeDiffSeconds = Math.floor(timeDiff % (1000 * 60) / 1000);
    var timeDiffMinutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))

    if (timeDiff < 0) {
        clearInterval(intervalID)
        document.getElementById("#countdown").innerHTML = "HACKATHON HAS STARTED"
        return
    }

    document.querySelector("#countdown").textContent = 
    `${timeDiffDays}d:${timeDiffHours}h:${timeDiffMinutes}m:${timeDiffSeconds}s UNTIL THE HACKATHON!`
}
