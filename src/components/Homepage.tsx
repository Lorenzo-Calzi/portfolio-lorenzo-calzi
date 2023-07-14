import * as React from "react";
import {Header, Main, Footer, Popup} from "./imports";
import {useEffect, useState} from "react";
import ScrollReveal from 'scrollreveal'

// @ts-ignore
import config from '../configuration/copy.json';

function Homepage() {
    const configArray = config
    const [theme, setTheme] = useState(false)
    const [language, setLanguage] = useState(true)
    const [currentSection, setCurrentSection] = useState<any>()
    const [loading, setLoading] = useState({
        background: false,
        bar: false,
        modal: false,
        navbar: false
    })

    useEffect(() => {
        navbarManagement()
        window.onscroll = () => {navbarManagement()};

        // NAVBAR REVEAL
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {} else {
            ScrollReveal().reveal('#navbar .left span', { delay: 25, origin: 'top' });
            ScrollReveal().reveal('#navbar .right ul', { delay: 25, origin: 'top', afterReveal: removeRevealEffects });
        }

        // JUMBOTRON REVEAL
        ScrollReveal().reveal('#jumbotron .title', { delay: 25, origin: 'top' });
        ScrollReveal().reveal('#jumbotron .subtitle', { delay: 50, origin: 'top' });
        ScrollReveal().reveal('#jumbotron .paragraph', { delay: 75, origin: 'top' });
        ScrollReveal().reveal('#jumbotron .description .contact', { delay: 100, origin: 'top', afterReveal: removeRevealEffects });
        ScrollReveal().reveal('#jumbotron .icons-xl a', { delay: 25, origin: 'left', interval: 50,  afterReveal: removeRevealEffects });
        ScrollReveal().reveal('#jumbotron #image', { delay: 100, origin: 'right' });
        ScrollReveal().reveal('#theme', { delay: 25, origin: 'right', afterReveal: removeRevealEffects });

        // ABOUTME REVEAL
        ScrollReveal().reveal('#aboutMe .title-gradient', { delay: 25, origin: 'left' });
        ScrollReveal().reveal('#aboutMe .title-solid', { delay: 50, origin: 'right' });
        ScrollReveal().reveal('#aboutMe .image', { delay: 50, origin: 'left' });
        ScrollReveal().reveal('#aboutMe .description h5', { delay: 75, origin: 'right' });
        ScrollReveal().reveal('#aboutMe .description p', { delay: 100, origin: 'right' });
        ScrollReveal().reveal('#aboutMe .description .button', { delay: 100, origin: 'right', afterReveal: removeRevealEffects });

        // SKILLS REVEAL
        ScrollReveal().reveal('#skills .title-gradient', { delay: 25, origin: 'left' });
        ScrollReveal().reveal('#skills .title-solid', { delay: 50, origin: 'right' });
        ScrollReveal().reveal('#skills .cards-container .subtitle', { delay: 50, origin: 'top' });
        ScrollReveal().reveal('#skills .cards-container .cards', { delay: 50, origin: 'right' });
        ScrollReveal().reveal('#skills .cards-container .cards .box', { delay: 50, origin: 'right', interval: 50,  afterReveal: removeRevealEffects });

        // PROJECTS REVEAL
        ScrollReveal().reveal('#projects .title-gradient', { delay: 25, origin: 'left' });
        ScrollReveal().reveal('#projects .title-solid', { delay: 50, origin: 'right' });
        ScrollReveal().reveal('#slider-container .slider-left', { delay: 50, origin: 'left' });
        ScrollReveal().reveal('#slider-container #slider-content', { delay: 75, origin: 'bottom' });
        ScrollReveal().reveal('#slider-container .bullet', { delay: 75, origin: 'bottom', interval: 50,  opacity: null, distance: '30px', afterReveal: removeRevealEffects });
        ScrollReveal().reveal('#slider-container .slider-right', { delay: 50, origin: 'right' });

        // CONTACTME REVEAL
        ScrollReveal().reveal('#contactMe .title-gradient', { delay: 25, origin: 'left' });
        ScrollReveal().reveal('#contactMe .title-solid', { delay: 50, origin: 'right' });
        ScrollReveal().reveal('#form .informations', { delay: 75, origin: 'left' });
        ScrollReveal().reveal('#form .informations .title', { delay: 75, origin: 'left' });
        ScrollReveal().reveal('#form .informations .information', { delay: 75, origin: 'left', interval: 100 });
        ScrollReveal().reveal('#form .divider', { delay: 75, origin: 'bottom' });
        ScrollReveal().reveal('#form .inputs', { delay: 75, origin: 'right' });
        ScrollReveal().reveal('#form .inputs .groups .input-group', { delay: 75, origin: 'right', interval: 100 });
        ScrollReveal().reveal('#form .inputs .groups .textarea-group', { delay: 500, origin: 'right' });
        ScrollReveal().reveal('#form .inputs .submit', { delay: 525, origin: 'right' });

        // FOOTER
        ScrollReveal().reveal('.copyright', { delay: 25, origin: 'bottom' });
    }, [theme, language])

    ScrollReveal({
        reset: false,
        distance: '50px',
        duration: 1500,
        delay: 0,
    })

    const removeRevealEffects= (el) => {
        el.style.transition = 'all 0.3s ease-in-out';
        el.style.transform = '';
    }

    const handlerLoading = (setValue) => {
        setLoading(setValue)
    }

    const handlerCurrentSection = (setValue) => {
        setCurrentSection(setValue)
    }

    const onChangeTheme = () => {
        setTheme(!theme)
        document.body.style.backgroundColor = theme ? "white" : '#211d3a'
    }

    const onChangeLanguage = () => {
        setLanguage(!language)
    }

    const navbarManagement = () => {
        const sections = document.querySelectorAll("section");
        const navLi = document.querySelectorAll("#navbar .container .right ul li");

        let current = "";

        sections.forEach((section) => {
            let top = window.scrollY;
            const offset = section.offsetTop - 60;

            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.getElementById("navbar").style.height = "5%";
                document.getElementById("theme").style.bottom = "86%";
                document.getElementById("to-the-top").style.opacity = "1";

                // document.querySelector<HTMLElement>(".left span").style.fontSize = "1vw";

                navLi.forEach((li: HTMLElement) => {
                    // li.style.fontSize = "0.8vw";
                });
            } else {
                document.getElementById("navbar").style.height = "10%";
                document.getElementById("theme").style.bottom = "81%";
                document.getElementById("to-the-top").style.opacity = "0";

                // document.querySelector<HTMLElement>(".left span").style.fontSize = "1.2vw";

                navLi.forEach((li: HTMLElement) => {
                    // li.style.fontSize = "1vw";
                });
            }

            if (top >= offset) {
                current = section.getAttribute("id");
                setCurrentSection(section.getAttribute("id"))
            }
        });
    }

    return (
        <div id="homepage" className={theme ? "dark" : "light"}>
            <Header theme={theme} onChangeTheme={onChangeTheme} language={language} onChangeLanguage={onChangeLanguage} configArray={configArray} loading={loading} handlerLoading={handlerLoading} handlerCurrentSection={handlerCurrentSection} currentSection={currentSection}/>
            <Main theme={theme} language={language} configArray={configArray} loading={loading} handlerLoading={handlerLoading}/>
            <Footer />

            <Popup loading={loading} handlerLoading={handlerLoading} handlerCurrentSection={handlerCurrentSection} currentSection={currentSection} configArray={configArray}/>

            <div id="theme" className="button-shadow" onClick={onChangeTheme}>
                <i className={`fa-solid fa-sun ${theme ? "opacity" : ''}`}></i>
                <i className={`fa-solid fa-moon ${!theme ? "opacity" : ''}`}></i>
            </div>

            <a id="to-the-top" className="button-shadow" href="#header">
                <i className="fa-solid fa-arrow-up" />
            </a>
        </div>
    )
}

export default Homepage;
