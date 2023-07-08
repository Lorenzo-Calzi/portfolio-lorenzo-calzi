import * as React from "react";
import Marquee from "react-fast-marquee";

function VoidSapce() {

    return (
        <div className="void-space">
            <Marquee>
                <i className="fab fa-react"></i>
                <i className="fab fa-vuejs"></i>
                <i className="fab fa-angular"></i>
                <i className="fab fa-node"></i>
            </Marquee>
        </div>
    )
}

export default VoidSapce;
