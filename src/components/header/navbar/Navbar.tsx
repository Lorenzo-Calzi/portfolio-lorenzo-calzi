import * as React from "react";
import {useEffect} from "react";

function Navbar() {

    useEffect(() => {

    }, []);

    return (
        <div id="navbar" className="container">
            <div className="left">
                <span>Lorenzo</span>
            </div>

            <div className="right">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                    <li><i className="fa-solid fa-moon"></i></li>
                </ul>

            </div>
        </div>
    )
}

export default Navbar;
