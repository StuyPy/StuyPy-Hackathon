import Image from 'next/image';

import StuyPyLogo from '/public/resources/logos/logo_hackathon_hd.png'

export default function Landing() {
    return (
        <div id="home-top" className="shadow position-relative">
        <div id="top-logo" className="animate__animated animate__fadeInDown">
        <Image src={StuyPyLogo} alt="landing-logo" />
        </div>
            <a
                className="button-fill animate__animated animate__fadeIn"
                target="_blank"
                rel="noreferrer noopener"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdMtlVv_mbSI1NTZc41n1TEEHdn2dp9zoBNkNulHg5MnbL4HQ/viewform">
                Sign Up
            </a>
        </div>
        )
}