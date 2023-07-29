import * as React from "react";
import {AboutMe, Skills, Projects, ContactMe} from "../imports";


function Main(props) {

    return (
        <div id="main">
            <AboutMe theme={props.theme} language={props.language} configArray={props.configArray}/>
            <Skills theme={props.theme} configArray={props.configArray}/>
            <Projects theme={props.theme}/>
            <ContactMe theme={props.theme} language={props.language} configArray={props.configArray}
                       loading={props.loading} handlerLoading={props.handlerLoading}/>
        </div>
    )
}

export default Main;
