import * as React from "react";
import {Header, AboutMe} from "./imports";
import {useState} from "react";

function Homepage() {

    const [theme, setTheme] = useState(false)

    const onChangeTheme = () => {
        setTheme(!theme)
    }

    return (
        <div id="homepage" className={theme ? "dark" : "light"}>
            <Header theme={theme} onChangeTheme={onChangeTheme}/>
            <AboutMe theme={theme} />
        </div>
    )
}

export default Homepage;
