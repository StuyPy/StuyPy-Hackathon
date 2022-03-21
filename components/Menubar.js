import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import hackathonLogo from '/public/resources/logos/logo_hackathon.png'
import themeToggleIcon from '/public/resources/theme-toggle-icon.png'

export default function Menubar() {
    const { theme, setTheme } =  useTheme()
    // const [animateHeader, setAnimateHeader] = useState(false)
    // useEffect(() => {
    //     const listener = () => {
    //         if (window.scrollY > 200) {
    //             setAnimateHeader(false)
    //         }
    //     }
    //         window.addEventListener("scroll", listener)

    //         return () => {
    //             window.removeEventListener("scroll", listener)
    //         }
    //     }, [])

    return (
        <nav id="navbar" className="animate__animated animate__fadeIn px-3 navbar navbar-expand-lg navbar-dark navbar-filled fixed-top">
            <Image src={hackathonLogo} height="60" width="60" alt="logo" />
            <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav"
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav navbar-nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link text-white fw-bold" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white fw-bold" href="#schedule">Schedule</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white fw-bold" href="#team">Our Team</a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link text-white fw-bold" href="#sponsors">Sponsors</a>
                    </li> */}
                    <li className="nav-item">
                        <a className="nav-link text-white fw-bold" href="#faq">FAQ</a>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => {
                            if (theme === 'light') {
                                setTheme('dark')
                            } else {
                                setTheme('light')
                            }
                        }}
                        className="nav-link">
                            <Image id="theme-toggle" src={themeToggleIcon} width="30" height="30" alt="theme-toggle" />
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}