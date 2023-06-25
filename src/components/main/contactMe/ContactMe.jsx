import * as React from "react"
import {Form, VoidSpace} from "../../imports";

function ContactMe() {

    return (
        <section id="contactMe">
            {/*<VoidSpace />*/}

            <div className="container dynamic-flex">
                <div className="titles">
                    <h1 className="title-gradient">Contatti</h1>
                    <h2 className="title-solid">Contatti</h2>
                </div>

                <Form/>
            </div>
        </section>
    )
}

export default ContactMe
