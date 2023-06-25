import * as React from "react";
import {useEffect} from "react";
import {VoidSpace} from "../../imports";

function Skills(props) {

    useEffect(() => {
    }, [])

    const educationCopies = [
        {
            period: '2020-2021',
            strong: 'Web developer',
            description: 'Boolean Careers'
        },
        {
            period: '2013-2019',
            strong: 'Diploma',
            description: 'Erasmo Da Rotterdam'
        },
        {
            period: '2020-2021',
            strong: 'Web developer',
            description: 'Boolean Careers'
        }
    ]

    const skillsCopies = [
        {
            title: 'HTML',
            percentage: '95%',
        },
        {
            title: 'CSS',
            percentage: '90%',
        },
        {
            title: 'Javascript',
            percentage: '80%',
        },
        {
            title: 'PHP',
            percentage: '45%',
        }
    ]

    const awardsCopies = [
        {
            period: '2019-2020',
            strong: 'Best Developer',
            description: 'Università di Milano'
        },
        {
            period: '2019-2020',
            strong: 'Best Developer',
            description: 'Università di Milano'
        },
        {
            period: '2019-2020',
            strong: 'Best Developer',
            description: 'Università di Milano'
        }
    ]

    return (
        <section id="skills">
            {/*<VoidSpace/>*/}

            <div className="container dynamic-flex">
                <div className="titles">
                    <h1 className="title-gradient">Abilità</h1>
                    <h2 className="title-solid">Abilità</h2>
                </div>

                <div className="cards">
                    <div className="education">
                        <div className="subtitle">
                            <h3>Studi</h3>
                        </div>
                        {
                            educationCopies.map((copy, index) => (
                                <div className="box" key={index}>
                                    <span className="period">{copy.period}</span>
                                    <span className="description"><strong>{copy.strong}</strong> - {copy.description}</span>
                                </div>
                            ))
                        }
                    </div>

                    <div className="skills">
                        <div className="subtitle">
                            <h3>Abilità</h3>
                        </div>
                        {
                            skillsCopies.map((copy, index) => (
                                <div className="box" key={index}>
                                    <div className="information">
                                        <span className="title">{copy.title}</span>
                                        <span className="percentage">{copy.percentage}</span>
                                    </div>
                                    <div className="bar">
                                        <div className="percentage" style={{width: `${copy.percentage}`}}></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="awards">
                        <div className="subtitle">
                            <h3>Premi</h3>
                        </div>
                        {
                            awardsCopies.map((copy, index) => (
                                <div className="box" key={index}>
                                    <span className="period">{copy.period}</span>
                                    <span className="description"><strong>{copy.strong}</strong> - {copy.description}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills;
