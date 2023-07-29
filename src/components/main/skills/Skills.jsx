import * as React from "react";

function Skills(props) {
    const configArray = props.configArray.main.skills;

    return (
        <section id="skills">
            <div className="container dynamic-flex">
                <div className="titles">
                    <h1 className="title-gradient">{configArray.title.ita}</h1>
                    <h2 className="title-solid">{configArray.title.ita}</h2>
                </div>

                <div className="cards-container">
                    <div className="education">
                        <div className="subtitle">
                            <h3 className={`button shadow-${props.theme ? "dark" : "light"}`}>Studi</h3>
                        </div>

                        <div className={`cards shadow-${props.theme ? "dark" : "light"}`}>
                            {
                                configArray.educations.map((copy, index) => (
                                    <div className={`box shadow-${props.theme ? "dark" : "light"}`} key={index}>
                                        <span className="period">{copy.period}</span>
                                        <span
                                            className="description"><strong>{copy.strong}</strong> - {copy.description}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="skills">
                        <div className="subtitle">
                            <h3 className={`button shadow-${props.theme ? "dark" : "light"}`}>Skills</h3>
                        </div>

                        <div className={`cards shadow-${props.theme ? "dark" : "light"}`}>
                            {
                                configArray.skills.map((copy, index) => (
                                    <div className={`box shadow-${props.theme ? "dark" : "light"}`} key={index}>
                                        <div className="information">
                                            <div className="icons">
                                                <span className="title">{copy.title}</span>
                                                <i className={copy.icon}></i>
                                            </div>

                                            <span className="percentage">{copy.percentage}</span>
                                        </div>
                                        <div className="bar">
                                            <div className="percentage" style={{width: `${copy.percentage}`}}></div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="experience">
                        <div className="subtitle">
                            <h3 className={`button shadow-${props.theme ? "dark" : "light"}`}>Esperienze</h3>
                        </div>

                        <div className={`cards shadow-${props.theme ? "dark" : "light"}`}>
                            {
                                configArray.jobs.map((copy, index) => (
                                    <div className={`box shadow-${props.theme ? "dark" : "light"}`} key={index}>
                                        <span className="period">{copy.period}</span>
                                        <span
                                            className="description"><strong>{copy.strong}</strong> - {copy.description}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;
