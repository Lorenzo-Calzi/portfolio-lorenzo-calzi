import * as React from "react";
import { AboutMe } from "../imports";

function Main(props) {

    return (
        <div id="main">
            <AboutMe theme={props.theme}/>
        </div>
    )
}

export default Main;
