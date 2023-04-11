import * as React from "react";
import {AboutMe, ContactMe} from "../imports";

function Main(props) {

    return (
        <div id="main">
            <AboutMe theme={props.theme} language={props.language} configArray={props.configArray}/>
            <ContactMe theme={props.theme} language={props.language} configArray={props.configArray}/>
        </div>
    )
}

export default Main;
