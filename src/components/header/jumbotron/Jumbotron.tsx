import * as React from "react";
import {useEffect, useRef} from "react";
import Typed from "typed.js";

function Jumbotron(props) {
    const el = useRef(null);
    const configArray = props.configArray.header.jumbotron

    const setImageHeight = () => {
        const box:any = document.getElementById("image");
        const height = box.offsetWidth

        if(height) {
            document.getElementById("image").setAttribute("style",`height: ${height}px`)
        }
    }

    useEffect(() => {
        setImageHeight()

        const typed = new Typed(el.current, {
            strings: props.language ? configArray.subtitle.ita : configArray.subtitle.eng,
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });

        return () => {
            typed.destroy();
        };

    }, [window.addEventListener("resize", setImageHeight), props.language])


    return (
        <div id="jumbotron">
            <div className="container dynamic-flex">
                <div className="icons-xl">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/lorenzo-calzi-9a12101a0/" target="_blank">
                                <i className={`fa-brands fa-linkedin-in ${props.theme ? "white" : "purple"}`}></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/lorenzo_calzi/" target="_blank">
                                <i className={`fa-brands fa-instagram ${props.theme ? "white" : "purple"}`}></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Lorenzo-Calzi" target="_blank">
                                <i className={`fa-brands fa-github ${props.theme ? "white" : "purple"}`}></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="content">
                    <div className="description">
                        <h1 className={`title ${props.theme ? "white" : "black"}`}>{props.language ? configArray.title.ita : configArray.title.eng}</h1>
                        <h3 className={`subtitle ${props.theme ? "white" : "grey"}`}><span ref={el}></span></h3>
                        <p className={`paragraph ${props.theme ? "white" : "grey"}`}>{props.language ? configArray.paragraph.ita : configArray.paragraph.eng}</p>
                        <button className={`contact ${props.theme ? "light purple" : "contact dark"}`}>{props.language ? configArray.button.ita : configArray.button.eng} <i className="fa-solid fa-paper-plane"></i></button>
                    </div>

                    <div className="images">
                        <div className="icons-sm">
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/lorenzo-calzi-9a12101a0/" target="_blank">
                                        <i className={`fa-brands fa-linkedin-in ${props.theme ? "white" : "purple"}`}></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/lorenzo_calzi/" target="_blank">
                                        <i className={`fa-brands fa-instagram ${props.theme ? "white" : "purple"}`}></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/Lorenzo-Calzi" target="_blank">
                                        <i className={`fa-brands fa-github ${props.theme ? "white" : "purple"}`}></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div id="image" className={`${props.theme ? "light" : "dark"}`}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;
