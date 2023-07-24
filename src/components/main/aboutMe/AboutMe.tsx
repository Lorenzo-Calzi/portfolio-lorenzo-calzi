import * as React from "react";

function AboutMe(props) {

    return (
        <section id="aboutMe">
            <div className="container dynamic-flex">
                <div className="titles">
                    <h1 className="title-gradient">Su di me</h1>
                    <h2 className="title-solid">Su di me</h2>
                </div>

                <div className="content">
                    <div className="image"/>
                    <div className="description">
                        <h5>Racconto un po' di me</h5>
                        <p>"Mi chiamo Lorenzo Calzi, ho 23 anni e sono di Milano. <br/>
                            Sono un appassionato di tecnologia in tutti i suoi ambiti e rimango costantemente aggiornato
                            sulle novità introdotte. <br/>
                            Sono una persona socievole, organizzata, precisa e mi pongo sempre l'obbiettivo di
                            raggiungere il miglior risultato possibile. <br/>
                            Quello che più mi motiva è sapere che il mondo della programmazione è in continua evoluzione
                            e che quindi avrò sempre qualcosa da imparare, infatti, cerco sempre di approfondire la
                            conoscenza dei linguaggi che già conosco e apprenderne di nuovi.
                        </p>
                        <a className={`button shadow-${!props.theme ? "light" : "dark"}`}
                           href={process.env.PUBLIC_URL + '/assets/cv/cv_lorenzo_calzi.pdf'} download>DOWNLOAD CV</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;
