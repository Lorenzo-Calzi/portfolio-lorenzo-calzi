import * as React from "react";
import {Header, Main} from "./imports";
import {useEffect, useState} from "react";
// @ts-ignore
import config from '../configuration/copy.json'

function Homepage() {
    const configArray = config
    const [theme, setTheme] = useState(false)
    const [language, setLanguage] = useState(true)

    const onChangeTheme = () => {
        setTheme(!theme)
    }
    const onChangeLanguage = () => {
        setLanguage(!language)
    }

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const navLi = document.querySelectorAll("#navbar .container .right ul li");
        const dynamicTheme = theme ? '-dark' : '-light'
        let current = "";

        sections.forEach((section) => {
            let top = window.scrollY;
            const offset = section.offsetTop - 60;

            if (top >= offset) {
                current = section.getAttribute("id");

                navLi.forEach((li) => {
                    li.classList.remove(`li-active${dynamicTheme}`);
                    if (li.classList.contains(current)) {
                        li.className = ''
                        li.classList.add(`${current}`, "list-item", `li-active${dynamicTheme}`)
                    }
                });
            }
        });

        window.onscroll = () => {
            sections.forEach((section) => {
                let top = window.scrollY;
                const offset = section.offsetTop - 60;

                if (top >= offset) {
                    current = section.getAttribute("id");
                    navLi.forEach((li) => {
                        li.classList.remove(`li-active${dynamicTheme}`);
                        if (li.classList.contains(current)) {
                            li.className = ''
                            li.classList.add(`${current}`, "list-item", `li-active${dynamicTheme}`)
                        }
                    });
                }
            });
        };
    }, [theme, language])

    return (
        <div id="homepage" className={theme ? "dark" : "light"}>
            <Header theme={theme} onChangeTheme={onChangeTheme} language={language} onChangeLanguage={onChangeLanguage} configArray={configArray}/>
            <Main theme={theme} language={language} configArray={configArray}/>

            <div className="theme" onClick={onChangeTheme}>
                <i className={`fa-solid fa-sun ${theme ? "opacity" : ''}`}></i>
                <i className={`fa-solid fa-moon ${!theme ? "opacity" : ''}`}></i>
            </div>

            <a className="to-the-top" href="#header">
                <i className="fa-solid fa-arrow-up" />
            </a>
        </div>
    )
}

export default Homepage;
