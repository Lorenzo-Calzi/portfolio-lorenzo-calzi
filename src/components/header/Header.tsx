import * as React from "react";
import {Navbar, Jumbotron} from "../imports";

function Header(props) {

    return (
        <section id="header">
            <Navbar theme={props.theme} onChangeTheme={props.onChangeTheme} language={props.language} onChangeLanguage={props.onChangeLanguage} configArray={props.configArray} loading={props.loading} handlerLoading={props.handlerLoading} handlerCurrentSection={props.handlerCurrentSection} currentSection={props.currentSection}/>
            <Jumbotron theme={props.theme} language={props.language} configArray={props.configArray}/>
        </section>
    )
}

export default Header;
