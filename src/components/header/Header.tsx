import * as React from "react";
import { Navbar, Jumbotron } from "../imports";

function Header(props) {

    return (
        <div id="header">
            <Navbar theme={props.theme} onChangeTheme={props.onChangeTheme}/>
            <Jumbotron theme={props.theme}/>
        </div>
    )
}

export default Header;
