import { useEffect } from 'react';

export default function About() {
    // Intersection observer code

    return (
        <div id="about-section" className="d-flex content-section container">
        <a id="about" className="anchor"></a> 
        <div>
            <div className="p-4 fluid-container on-scroll-animate animate__animated">
                <h1>What is StuyPy?</h1> <hr />
                <p>
                    StuyPy is a casual, <strong>beginner-friendly</strong> club aiming to teach people with no prior 
                    experience to code in Python, and to create projects while having fun. 
                    We additionally want to introduce members to Python, and provide them with
                    a strong foundation in the field of computer science from the ground up. 
                </p>
            </div>
            <div className="p-4 fluid-container on-scroll-animate animate__animated">
                <h1>The StuyPy-a-Thon</h1> <hr />
                <p className="pb-4">
                    To better reinforce concepts and allow members to learn even more, We will
                    be hosting <strong>StuyPy&apos;s first hackathon!</strong> Show what you&apos;ve learned so far, and create a project
                    which you can be proud of! This hackathon is open to <em>all members</em> (anyone can join 
                    at the StuyActivties page), where you can work with others or solo if you wish.
                </p> 
                <a 
                    className="button-fill animate__animated animate__fadeIn" 
                    href="https://stuyactivities.org/stuypy"
                    target="_blank"
                    rel="noopener noreferrer">
                    Join StuyActivities
                </a>
            </div>
        </div>
        
        <div id="countdown" className="animate__animated on-scroll-animate d-flex flex-column justify-content-center text-center">
            <div className="d-flex justify-content-center text-center">
                <div className="p-2 d-flex justify-content-center flex-column">
                    <h1 id="days-left" className="text-center">88</h1>
                    <p className="countdown-label">days</p>
                </div>
                <div className="p-2 d-flex justify-content-center flex-column">
                    <h1 id="hours-left" className="text-center">88</h1>
                    <p className="countdown-label">hr</p>
                </div>
                <div className="p-2 d-flex justify-content-center flex-column">
                    <h1 id="minutes-left" className="text-center">88</h1>
                    <p className="countdown-label">min</p>
                </div>
                <div className="p-2 d-flex justify-content-center flex-column">
                    <h1 id="seconds-left" className="text-center">88</h1>
                    <p className="countdown-label">sec</p>
                </div>
            </div> <hr />
            <p>Until the hackathon!</p>
        </div>
        
        
    </div>
    )
}