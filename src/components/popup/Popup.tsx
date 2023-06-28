import * as React from "react";

function Popup(props) {

    return (
        <>
            {
                props.loading.popup && (
                    <div className="popup">
                        <div className="top">
                            <i className="fa-solid fa-check" />
                        </div>

                        <div className="bottom">
                            <span><strong>Email inviata!</strong></span>

                            <span>Grazie per avermi contattato.</span>

                            <button>Chiudi</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Popup;