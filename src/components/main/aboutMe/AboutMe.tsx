import * as React from "react";
// @ts-ignore
import {VoidSpace} from "../../imports";

function AboutMe(props) {

    return (
        <section id="aboutMe">
            {/*<VoidSpace/>*/}

            <div className="container dynamic-flex">
                <div className="titles">
                    <h1 className="title-gradient">Su di me</h1>
                    <h2 className="title-solid">Su di me</h2>
                </div>

                <div className="content">
                    <div className="image"></div>
                    <div className="description">
                        <h5>Vi racconto un po' di me</h5>
                        <p>"Appassionato di tecnologia in tutti i suoi ambiti e costantemente aggiornato sulle novità introdotte. Sono una persona socievole, organizzata e attenta ai dettagli con l'obbiettivo di raggiungere sempre il miglior risultato possibile. ll mondo della programmazione è in continua evoluzione e sapere che avrò sempre qualcosa da imparare mi motiva molto. Non vedo l'ora di poter lavorare a nuovi progetti, approfondire la conoscenza dei linguaggi che ho studiato e apprendere nuove tecnologie."</p>
                        <a href={process.env.PUBLIC_URL + '/assets/cv/cv_lorenzo_calzi.pdf'} download>DOWNLOAD CV</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;
