import * as React from "react";

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
                props.loading.popup && (
                    <div id="popup">
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
        </>
    )
}

export default Popup;