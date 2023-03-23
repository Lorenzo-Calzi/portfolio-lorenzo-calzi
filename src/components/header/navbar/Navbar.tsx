import * as React from "react";

function Navbar(props) {

    return (
        <div id="navbar">
            <div className="container flex-row jc-between">
                <div className="left">
                    <span>Portfolio</span>
                </div>

                <div className="right">
                    <ul>
                        <li className="list-item li-active">Home</li>
                        <li className="list-item">About</li>
                        <li className="list-item">Skills</li>
                        <li className="list-item">Services</li>
                        <li className="list-item">Portfolio</li>
                        <li className="list-item">Contact</li>
                        <li className="theme" onClick={props.onChangeTheme}>
                            <i className={`fa-solid fa-sun ${props.theme && "opacity"}`}></i>
                            <i className={`fa-solid fa-moon ${!props.theme && "opacity"}`}></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
