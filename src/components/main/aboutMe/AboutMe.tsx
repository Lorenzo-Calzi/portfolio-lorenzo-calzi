import * as React from "react";

function AboutMe(props) {

    return (
        <section id="aboutMe">
            <div className="void-space"></div>

            <div className="container dynamic-flex">
                <div className="image"></div>
                <div className="description">
                    <h5>"Lorem ipsum dolor sit amet, consectetur adipisicing."</h5>
                    <p>"Appassionato di tecnologia in tutti i suoi ambiti e costantemente aggiornato sulle novità introdotte. Sono una persona socievole, organizzata e attenta ai dettagli con l'obbiettivo di raggiungere sempre il miglior risultato possibile. ll mondo della programmazione è in continua evoluzione e sapere che avrò sempre qualcosa da imparare mi motiva molto. Non vedo l'ora di poter lavorare a nuovi progetti, approfondire la conoscenza dei linguaggi che ho studiato e apprendere nuove tecnologie."</p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;
