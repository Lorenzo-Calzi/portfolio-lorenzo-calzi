import * as React from "react";
import {useEffect} from "react";

function Jumbotron(props) {
    const setImageHeight = () => {
        const box:any = document.getElementById("image");
        const height = box.offsetWidth

        if(height) {
            document.getElementById("image").setAttribute("style",`height: ${height}px`)
        }
    }

    useEffect(() => {
        setImageHeight()
    }, [window.addEventListener("resize", setImageHeight)])



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
                        <h1 className={`title ${props.theme ? "white" : "black"}`}>Hi, I'm Lorenzo</h1>
                        <h3 className={`subtitle ${props.theme ? "white" : "grey"}`}>Frontend developer</h3>
                        <p className={`paragraph ${props.theme ? "white" : "grey"}`}>High level experience in web deisgn and development knowledge, producing quality work.</p>
                        <button className={`contact ${props.theme ? "light purple" : "contact dark"}`}>Contattami <i className="fa-solid fa-paper-plane"></i></button>
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
