import * as React from "react";
import {useEffect, useRef} from "react";
import Typed from "typed.js";

function Jumbotron(props) {
    const textCarousel = useRef(null);
    const configArray = props.configArray.header.jumbotron

    const setImageHeight = (timeout?: string) => {

        const timer = setTimeout(() => {
            const width = document.getElementById("image").offsetWidth;

            if (width) {
                document.getElementById("image").setAttribute("style", `height: ${width}px`)
            }
        }, timeout === 'DEFAULT' ? 0 : 500);
        return () => clearTimeout(timer);

    }

    useEffect(() => {
        setImageHeight('DEFAULT')

        const typed = new Typed(textCarousel.current, {
            strings: props.language ? configArray.subtitle.ita : configArray.subtitle.eng,
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });

        window.addEventListener("resize", () => setImageHeight)

        return () => {
            typed.destroy();
        };
    }, [props.language])

    return (
        <div id="jumbotron">
            <div className="container dynamic-flex">
                <div className="icons">
                    <a href="https://www.linkedin.com/in/lorenzo-calzi-9a12101a0/" target="_blank"
                       aria-label="linkedin-button"
                       className={`icon shadow-${!props.theme ? "light" : "dark"}`}>
                        <i className={`fa-brands fa-linkedin-in ${props.theme ? "white" : "purple"}`}></i>
                    </a>

                    <a href="https://www.instagram.com/lorenzo_calzi/" target="_blank" aria-label="instagram-button"
                       className={`icon shadow-${!props.theme ? "light" : "dark"}`}>
                        <i className={`fa-brands fa-instagram ${props.theme ? "white" : "purple"}`}></i>
                    </a>

                    <a href="https://github.com/Lorenzo-Calzi" target="_blank" aria-label="github-button"
                       className={`icon shadow-${!props.theme ? "light" : "dark"}`}>
                        <i className={`fa-brands fa-github-alt ${props.theme ? "white" : "purple"}`}></i>
                    </a>
                </div>

                <div className="content">
                    <div className="description">
                        <h1 className={`title ${props.theme ? "white" : "black"}`}>{props.language ? configArray.title.ita : configArray.title.eng}</h1>
                        <h2 className={`subtitle ${props.theme ? "white" : "grey"}`}><span ref={textCarousel}></span>
                        </h2>

                        <p className={`paragraph ${props.theme ? "white" : "grey"}`}>{props.language ? configArray.paragraph.ita : configArray.paragraph.eng}</p>
                        <a className={`contact shadow-${!props.theme ? "light" : "dark"}`} href="#contactMe">
                            {props.language ? configArray.button.ita : configArray.button.eng} <i
                            className="fa-solid fa-paper-plane"></i>
                        </a>
                    </div>

                    <div className="images">
                        <div className="icons-sm">
                            <a href="https://www.linkedin.com/in/lorenzo-calzi-9a12101a0/" target="_blank"
                               aria-label="linkedin-button"
                               className={`icon shadow-${!props.theme ? "light" : "dark"}`}>
                                <i className={`fa-brands fa-linkedin-in ${props.theme ? "white" : "purple"}`}></i>
                            </a>

                            <a href="https://www.instagram.com/lorenzo_calzi/" target="_blank"
                               aria-label="instagram-button"
                               className={`icon shadow-${!props.theme ? "light" : "dark"}`}>
                                <i className={`fa-brands fa-instagram ${props.theme ? "white" : "purple"}`}></i>
                            </a>

                            <a href="https://github.com/Lorenzo-Calzi" target="_blank" aria-label="github-button"
                               className={`icon shadow-${!props.theme ? "light" : "dark"}`}>
                                <i className={`fa-brands fa-github-alt ${props.theme ? "white" : "purple"}`}></i>
                            </a>
                        </div>
                        <div id="image"
                             style={{backgroundImage: `url("${process.env.PUBLIC_URL}/assets/img/${!props.theme ? "jumbo-image-light.webp" : "jumbo-image-light.webp"}")`}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;
