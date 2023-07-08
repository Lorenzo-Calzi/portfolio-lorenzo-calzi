import * as React from "react";

function Footer(props) {

    return (
        <div id="footer">
            {/*<div className="credits">*/}
            {/*    <span>Portfolio By</span>*/}
            {/*    <a href="https://github.com/Lorenzo-Calzi">Lorenzo Calzi</a>*/}
            {/*</div>*/}
            <div className="copyright">
                <span>
                    Copyright
                    <i className="fa-regular fa-copyright"></i>
                    2023 By
                    <a href="https://github.com/Lorenzo-Calzi">Lorenzo Calzi</a>
                    | All Right Reserved.
                </span>
            </div>
        </div>
    )
}

export default Footer;
