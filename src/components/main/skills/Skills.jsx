import * as React from "react";

function Skills(props) {

    const educationCopies = [
        {
            period: '2020 - 2021',
            strong: 'Web developer',
            description: 'Boolean Careers'
        },
        {
            period: '2013 - 2019',
            strong: 'Diploma',
            description: 'Erasmo Da Rotterdam'
        }
    ]

    const skillsCopies = [
        {
            title: 'HTML',
            icon: 'devicon-html5-plain colored',
            percentage: '95%',
        },
        {
            title: 'CSS',
            icon: 'devicon-css3-plain colored',
            percentage: '90%',
        },
        {
            title: 'Javascript',
            icon: 'devicon-javascript-plain colored',
            percentage: '80%',
        },
    ]

    const jobsCopies = [
        {
            period: '11/2021 - Current',
            strong: 'Full Stack Web Developer',
            description: 'ANYT1ME'
        },
        {
            period: '03/2021 - 09/2021',
            strong: 'Jr. Full Stack Web Developer Trainee',
            description: 'Boolean Careers'
        },
        {
            period: '11/2019 - 11/2020',
            strong: 'Tecnico Help Desk',
            description: 'Sielte S.p.a'
        }
    ]

    return (
        <section id="skills">
            <div className="container dynamic-flex">
                <div className="titles">
                    <h1 className="title-gradient">Abilità</h1>
                    <h2 className="title-solid">Abilità</h2>
                </div>

                <div className="cards-container">
                    <div className="education">
                        <div className="subtitle">
                            <h3 className={`button shadow-${props.theme ? "light" : "dark"}`}>Studi</h3>
                        </div>

                        <div className={`cards shadow-${props.theme ? "light" : "dark"}`}>
                            {
                                educationCopies.map((copy, index) => (
                                    <div className={`box shadow-${props.theme ? "light" : "dark"}`} key={index}>
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
                            <h3 className={`button shadow-${props.theme ? "light" : "dark"}`}>Skills</h3>
                        </div>

                        <div className={`cards shadow-${props.theme ? "light" : "dark"}`}>
                            {
                                skillsCopies.map((copy, index) => (
                                    <div className={`box shadow-${props.theme ? "light" : "dark"}`} key={index}>
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
                            <h3 className={`button shadow-${props.theme ? "light" : "dark"}`}>Esperienze</h3>
                        </div>

                        <div className={`cards shadow-${props.theme ? "light" : "dark"}`}>
                            {
                                jobsCopies.map((copy, index) => (
                                    <div className={`box shadow-${props.theme ? "light" : "dark"}`} key={index}>
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
