import * as React from "react";

function Skills(props) {

    const educationCopies = [
        {
            period: '10/2021 - Current',
            strong: 'Formazione',
            description: 'Rimango aggiornato approfondendo e facendo corsi formativi'
        },
        {
            period: '03/2020 - 09/2021',
            strong: 'Web developer',
            description: 'Boolean Careers'
        },
        {
            period: '09/2013 - 06/2019',
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
            percentage: '95%',
        },
        {
            title: 'Javascript',
            icon: 'devicon-javascript-plain colored',
            percentage: '90%',
        },
        {
            title: 'Typescript',
            icon: 'devicon-typescript-plain colored',
            percentage: '85%',
        },
        {
            title: 'React',
            icon: 'devicon-react-original colored',
            percentage: '90%',
        },
        {
            title: 'Angular',
            icon: 'devicon-angularjs-plain colored',
            percentage: '60%',
        },
        {
            title: 'Sass',
            icon: 'devicon-sass-original colored',
            percentage: '95%',
        },
        {
            title: 'Tailwind',
            icon: 'devicon-tailwindcss-plain colored',
            percentage: '75%',
        },
        {
            title: 'Bootstrap',
            icon: 'devicon-bootstrap-plain colored',
            percentage: '65%',
        },
        {
            title: 'Git',
            icon: 'devicon-git-plain colored',
            percentage: '80%',
        },
        {
            title: 'Figma',
            icon: 'devicon-figma-plain colored',
            percentage: '40%',
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
        },
        {
            period: '10/2018 - 02/2029',
            strong: 'Wordpress developer trainee',
            description: 'Lavoratore Autonomo'
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
                            <h3 className={`button shadow-${props.theme ? "dark" : "light"}`}>Studi</h3>
                        </div>

                        <div className={`cards shadow-${props.theme ? "dark" : "light"}`}>
                            {
                                educationCopies.map((copy, index) => (
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
                                skillsCopies.map((copy, index) => (
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
                                jobsCopies.map((copy, index) => (
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
