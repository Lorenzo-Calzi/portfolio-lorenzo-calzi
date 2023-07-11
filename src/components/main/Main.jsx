import * as React from "react";
import {AboutMe, Skills, Projects, ContactMe} from "../imports";


function Main(props) {

    return (
        <div id="main">
            <AboutMe theme={props.theme} language={props.language} configArray={props.configArray}/>
            <Skills />
            <Projects theme={props.theme}/>
            <ContactMe theme={props.theme} language={props.language} configArray={props.configArray} loading={props.loading} handler={props.handler}/>
        </div>
    )
}

export default Main;
