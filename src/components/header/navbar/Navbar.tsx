import * as React from "react";

function Navbar(props) {

    const flag = props.language ? "/assets/img/bandiera-regno-unito.jpg" : "/assets/img/bandiera-italia.png"
    const configArray = props.configArray.header.navbar

    return (
        <div id="navbar" className={props.theme ? "dark" : "light"}>
            <div className="container flex-row jc-between">
                <div className="left">
                    <span>{props.language ? configArray.title.ita : configArray.title.eng}</span>
                </div>

                <div className="right">
                    <ul>
                        {
                            props.language ? (
                                    configArray.listItems.ita.map((value, index) => {
                                        if(index === 0) {
                                            return (
                                                <li key={value} className={`header ${props.theme ? "li-active-dark" : "li-active-light"}`}>
                                                    <a href="#header">{value}</a>
                                                </li>
                                            )
                                        } else if (index === 1) {
                                            return (
                                                <li key={value} className={`aboutMe`}>
                                                    <a href="#aboutMe">{value}</a>
                                                </li>
                                            )
                                        } else if (index === 2) {
                                            return (
                                                <li key={value} className={`skills`}>
                                                    <a href="#skills">{value}</a>
                                                </li>
                                            )
                                        } else if (index === 3) {
                                            return (
                                                <li key={value} className={`projects`}>
                                                    <a href="#projects">{value}</a>
                                                </li>
                                            )
                                        } else if (index === 4) {
                                            return (
                                                <li key={value} className={`contactMe`}>
                                                    <a href="#contactMe">{value}</a>
                                                </li>
                                            )
                                        } else {
                                            return (
                                                <li key={value} className={`list-item`}>
                                                    <a href={`#${value}`}>{value}</a>
                                                </li>
                                            )
                                        }
                                    })
                                ) : (
                                    configArray.listItems.eng.map((value, index) => {
                                        if(index === 0) {
                                            return (
                                                <li key={value} className={`header ${props.theme ? "li-active-dark" : "li-active-light"}`}>
                                                    <a href="#header">{value}</a>
                                                </li>
                                            )
                                        } else if (index === 1) {
                                            return (
                                                <li key={value} className={`aboutMe`}>
                                                    <a href="#aboutMe">{value}</a>
                                                </li>
                                            )
                                        } else if (index === 2) {
                                            return (
                                                <li key={value} className={`skills`}>
                                                    <a href="#skills">{value}</a>
                                                </li>
                                            )
                                        } else if (index === 3) {
                                            return (
                                                <li key={value} className={`projects`}>
                                                    <a href="#projects">{value}</a>
                                                </li>
                                            )
                                        } else if (index === 4) {
                                            return (
                                                <li key={value} className={`contactMe`}>
                                                    <a href="#contactMe">{value}</a>
                                                </li>
                                            )
                                        } else {
                                            return (
                                                <li key={value} className={`list-item`}>
                                                    <a href={`#${value}`}>{value}</a>
                                                </li>
                                            )
                                        }
                                    })
                                )
                        }

                        {/*<li className="language" onClick={props.onChangeLanguage}*/}
                        {/*    style={{backgroundImage: `url(${process.env.PUBLIC_URL + flag})`}}>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
