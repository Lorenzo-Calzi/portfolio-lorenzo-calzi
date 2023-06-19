import * as React from "react";
import {AboutMe, Skills, Projects, ContactMe} from "../imports";

function Main(props) {

    return (
        <div id="main">
            <AboutMe theme={props.theme} language={props.language} configArray={props.configArray}/>
            <Skills />
            <Projects />
            <ContactMe theme={props.theme} language={props.language} configArray={props.configArray}/>
        </div>
    )
}

export default Main;
