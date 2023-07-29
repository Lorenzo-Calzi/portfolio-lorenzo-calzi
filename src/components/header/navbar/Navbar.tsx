import * as React from "react";

function Navbar(props) {

    const flag = props.language ? "/assets/img/bandiera-regno-unito.jpg" : "/assets/img/bandiera-italia.png"
    const configArray = props.configArray.header.navbar

    const toggleNavbar = () => {
        props.handlerLoading({
            background: true,
            bar: false,
            modal: false,
            navbar: true
        })
        document.body.style.overflow = "hidden"
    }

    return (
        <div id="navbar" className={props.theme ? "dark" : "light"}>
            <div className="container flex-row jc-between">
                <div className="left">
                    <span>{props.language ? configArray.title.ita : configArray.title.eng}</span>
                </div>

                <div className="right">
                    <div>
                        {
                            props.language ? (
                                configArray.listItems.ita.map((item) => (
                                    <a href={`#${item.href}`} key={item.value}
                                       className={`${item.href} ${item.href === props.currentSection ? 'li-active-light' : ''}`}
                                       onClick={() => props.handlerCurrentSection(item.href)}>
                                        {item.value}
                                    </a>
                                ))
                            ) : (
                                configArray.listItems.eng.map((item) => (
                                    <a href={`#${item.href}`} key={item.value}
                                       className={`${item.href} ${item.href === props.currentSection ? 'li-active-light' : ''}`}
                                       onClick={() => props.handlerCurrentSection(item.href)}>
                                        {item.value}
                                    </a>
                                ))
                            )
                        }

                        {/*<li className="language" onClick={props.onChangeLanguage}*/}
                        {/*    style={{backgroundImage: `url(${process.env.PUBLIC_URL + flag})`}}>*/}
                        {/*</li>*/}
                    </div>

                    <div className="menu" onClick={toggleNavbar}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
