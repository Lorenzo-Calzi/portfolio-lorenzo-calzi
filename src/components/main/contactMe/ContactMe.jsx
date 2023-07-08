import * as React from "react"
import {Form, LoaderSpinner, Popup} from "../../imports";
import {useState} from "react";

function ContactMe() {
    const [loading, setLoading] = useState({
        background: false,
        bar: false,
        popup: false
    })

    const handler = (setValue) => {
        setLoading(setValue)
    }

    return (
        <section id="contactMe" style={{pointerEvents: loading.bar ? 'none' : 'auto', userSelect: loading.bar ? 'none' : 'auto'}}>
            <LoaderSpinner loading={loading} />

            <Popup loading={loading} handler={handler} />

            <div className="container dynamic-flex">
                <div className="titles">
                    <h1 className="title-gradient">Contatti</h1>
                    <h2 className="title-solid">Contatti</h2>
                </div>

                <Form handler={handler}/>
            </div>
        </section>
    )
}

export default ContactMe
