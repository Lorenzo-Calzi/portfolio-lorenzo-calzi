import React from "react";

import './sass/common.scss'

import './components/homepage.scss'

import './components/header/header.scss';
import './components/header/navbar/navbar.scss';
import './components/header/jumbotron/jumbotron.scss';

import './components/main/main.scss';
import './components/main/aboutMe/aboutMe.scss';

import { Homepage } from "./components/imports"

function App() {
  return (
    <div className="App">
        <Homepage/>
    </div>
  );
}

export default App;
