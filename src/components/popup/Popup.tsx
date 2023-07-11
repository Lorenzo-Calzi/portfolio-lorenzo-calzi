import * as React from "react";
import {BarLoader} from "react-spinners";

function Popup(props) {

    const configArray = props.configArray.header.navbar
    const closePopup = () => {
        document.getElementById('popup').style.animation = "fade-out 1s ease-in-out both"

        const timer = setTimeout(() => {
            props.handlerLoading({
                background: false,
                bar: false,
                modal: false,
                navbar: false
            })

            document.body.style.overflow = "auto"
        }, 1000);
        return () => clearTimeout(timer);
    }

    return (
        <>
            {
                props.loading.background && (
                    <div id="popup">
                        {
                            props.loading.bar && (
                                <BarLoader color={'#6D56E9'} loading={props.loading.bar} id="loader" height={15} width={200} speedMultiplier={1}/>
                            )
                        }
                        {
                            props.loading.modal && (
                                <div id="modal">
                                    <div className="top">
                                        <i className="fa-solid fa-check" />
                                    </div>

                                    <div className="bottom">
                                        <span><strong>Email inviata!</strong></span>

                                        <span>Grazie per avermi contattato.</span>

                                        <button onClick={closePopup}>Chiudi</button>
                                    </div>
                                </div>
                            )
                        }
                        {
                            props.loading.navbar && (
                                <div id="navbar">
                                    <i className="fa-solid fa-xmark" onClick={closePopup}/>

                                    <ul onClick={closePopup}>
                                        {
                                            configArray.listItems.ita.map((item) => (
                                                <li key={item.value} className={`${item.href} ${item.href === props.currentSection ? 'li-active-light' : ''}`} onClick={() => props.handlerCurrentSection(item.href)}>
                                                    <a href={`#${item.href}`}>{item.value}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </>
    )
}

export default Popup;