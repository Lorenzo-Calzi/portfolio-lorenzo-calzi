import * as React from "react";

function AboutMe(props) {
    const configArray = props.configArray.main.aboutMe;

    return (
        <section id="aboutMe">
            <div className="container dynamic-flex">
                <div className="titles">
                    <h1 className="title-gradient">{configArray.title.ita}</h1>
                    <h2 className="title-solid">{configArray.title.ita}</h2>
                </div>

                <div className="content">
                    <div className="image"/>
                    <div className="description">
                        <h3>{configArray.subtitle.ita}</h3>
                        <p>{configArray.paragraph.ita}</p>
                        <a className={`button shadow-${!props.theme ? "light" : "dark"}`}
                           href={process.env.PUBLIC_URL + '/assets/cv/cv_lorenzo_calzi.pdf'}
                           download>{configArray.button.ita}</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;
