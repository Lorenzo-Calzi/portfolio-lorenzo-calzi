import React from "react";

import './sass/common.scss'

import './components/homepage.scss'

import './components/header/header.scss';
import './components/header/navbar/navbar.scss';
import './components/header/jumbotron/jumbotron.scss';

import './components/main/main.scss';
import './components/main/aboutMe/aboutMe.scss';
import './components/main/skills/skills.scss';
import './components/main/projects/projects.scss';
import './components/main/projects/carousel/carousel.scss';
import './components/main/contactMe/contactMe.scss';
import './components/main/contactMe/form/form.scss';

import './components/footer/footer.scss';

import './components/void-space/voidSpace.scss';
import './components/loader-spinner/loaderSpinner.scss';
import './components/popup/popup.scss';

import {Homepage} from "./components/imports"

function App() {
    return (
        <div className="App">
            <Homepage/>
        </div>
    );
}

export default App;
