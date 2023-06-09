import * as React from "react";
import {Carousel} from "../../imports";


function Projects(props) {

    return (
        <section id="projects">
            <div className="container dynamic-flex">
                <div className="titles">
                    <h1 className="title-gradient">Progetti</h1>
                    <h2 className="title-solid">Progetti</h2>
                </div>

                <Carousel theme={props.theme}/>
            </div>
        </section>
    )
}

export default Projects;
