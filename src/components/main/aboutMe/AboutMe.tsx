import * as React from "react";

function AboutMe(props) {

    return (
        <section id="aboutMe">
            <div className="container dynamic-flex">
                <div className="top">
                    <h1 className="title">About Me</h1>
                    <h3 className="subtitle">My Introduction</h3>
                </div>

                <div className="bottom">
                    <div className="image"></div>
                    <div className="description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad commodi laboriosam quia rem veniam.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;
