import * as React from "react";
import {BarLoader} from "react-spinners";

function Popup(props) {

    const closePopup = () => {
        document.getElementById('popup').style.animation = "fade-out 1s ease-in-out both"

        const timer = setTimeout(() => {
            props.handler({
                background: false,
                bar: false,
                popup: false
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
                            props.loading.popup && (
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
                    </div>
                )
            }
        </>
    )
}

export default Popup;