/* Scroll animation constants */
const FRAMES = 9
const SCHEDULE = document.getElementById("schedule-section")
const SCHEDULE_IMAGE = document.getElementById("scroll-animation")
const START_PERCENTAGE = 40
const SNAKE_STEP = START_PERCENTAGE / FRAMES
const SCHEDULE_ITEMS_STEP = START_PERCENTAGE / 5 // 5 is items in the schedule
const SCHEDULE_ITEMS = document.querySelectorAll(".schedule-item")
const SCHEDULE_ITEMS_LEN = SCHEDULE_ITEMS.length

const STYLESHEET = document.getElementById("theme")
var darkMode = false

const NAVBAR = document.getElementById("navbar")
var animationChoice = 0

/* CHANGE SPECIFIC DATE */
const HACKATHON_DATE = new Date(2022, 5, 2, 1, 2, 3).getTime() // june 2nd at 1:02:03 ET
const DAYS_LEFT = document.getElementById("days-left")
const HOURS_LEFT = document.getElementById("hours-left")
const MINUTES_LEFT = document.getElementById("minutes-left")
const SECONDS_LEFT = document.getElementById("seconds-left")

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

/* FAQ */
const faqObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate__fadeIn")
        }
    })
})

document.querySelectorAll(".on-scroll-fade").forEach(entry => {
    if (entry) {
        faqObserver.observe(entry)
    }
})

/* change stylesheet to corresponding theme */
function setTheme(darkMode) {
    if (darkMode) {
        STYLESHEET.href = "style_dark.css"
    } else {
        STYLESHEET.href = "style_light.css"
    }
}

if (window.matchMedia) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        darkMode = true
    } else {
        darkMode = false
    }
} else {
    darkMode = false
}

setTheme(darkMode)

function themeToggle() {
   setTheme(!darkMode)
   darkMode = !darkMode
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

        // ** snake animation **
        if (percentageScroll <= START_PERCENTAGE) {
            /* Gets the closest frame based on the STEP interval, depending on the current percentageScroll */
            var currentSnakeFrame = Math.floor(FRAMES - (percentageScroll / SNAKE_STEP))
            if (currentSnakeFrame > 8) {
                currentSnakeFrame = 8
            }
            SCHEDULE_IMAGE.src = `resources/frames/${currentSnakeFrame}.png` 
        }

        // ** schedule items animation **
        
        /* Gets the closest frame based on the STEP interval, depending on the current percentageScroll */
        var currentScheduleFrame = Math.floor(SCHEDULE_ITEMS_LEN - (percentageScroll / SCHEDULE_ITEMS_STEP))
        if (currentScheduleFrame > SCHEDULE_ITEMS_LEN) {
            currentScheduleFrame = SCHEDULE_ITEMS_LEN
        }

        SCHEDULE_ITEMS[currentScheduleFrame].classList.add("schedule-item-filled")
        SCHEDULE_ITEMS[currentScheduleFrame].classList.remove("schedule-item-start")

    }

        // if (schedule_class_list.contains("schedule-item-filled")) {
        //     schedule_class_list.remove("schedule-item-filled")
        //     schedule_class_list.add("schedule-item-transparent")
        // } else if (schedule_class_list.contains("schedule-item-transparent")) {
        //     schedule_class_list.add("schedule-item-filled")
        //     schedule_class_list.remove("schedule-item-transparent")
        // } else {
        //     schedule_class_list.remove("schedule-item-start")
        //     schedule_class_list.add("schedule-item-filled")
        // }      
}

/* Countdown timer */

// updates every second
var intervalID = setInterval(updateTimer, 1)


function updateTimer(){ 
    var today = new Date().getTime() 

    var timeDiff = HACKATHON_DATE - today // time diff in milleseconds

    var timeDiffDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
    var timeDiffHours = Math.floor((timeDiff % (timeDiffDays / timeDiff)) / (1000 * 60 * 60));
    var timeDiffSeconds = Math.floor(timeDiff % (1000 * 60) / 1000);
    var timeDiffMinutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))

    if (timeDiff < 0) {
        clearInterval(intervalID)
        COUNTDOWN.innerHTML = "THE HACKATHON HAS STARTED!" // no more countdown :0
    } else {
        DAYS_LEFT.textContent = `${timeDiffDays}`
        HOURS_LEFT.textContent = `${timeDiffHours}`
        MINUTES_LEFT.textContent = `${timeDiffMinutes}`
        SECONDS_LEFT.textContent = `${timeDiffSeconds}`
    }

    
}
