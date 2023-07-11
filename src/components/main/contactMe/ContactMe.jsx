import * as React from "react"
import {Form} from "../../imports";

function ContactMe(props) {

    return (
        <section id="contactMe" style={{pointerEvents: props.loading.bar ? 'none' : 'auto', userSelect: props.loading.bar ? 'none' : 'auto'}}>
            <div className="container dynamic-flex">
                <div className="titles">
                    <h1 className="title-gradient">Contatti</h1>
                    <h2 className="title-solid">Contatti</h2>
                </div>

                <Form handler={props.handler}/>
            </div>
        </section>
    )
}

export default ContactMe
