import React from 'react';
import style from './Main.module.css'
import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";

const Main = () => {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <Home/>
                <About/>
                <Skills/>
                <Portfolio/>
                <Contact/>
            </div>
        </div>
    );
};
export default Main;