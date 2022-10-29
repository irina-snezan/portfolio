import React from 'react';
import style from './Home.module.css'
import styleContainer from "../../common/styles/Container.module.css";

const Home = () => {
    return (<div className={style.home}>
            <div className={styleContainer.container}>
                <div>
                    <h1>Irina <span>Shabuldajeva</span></h1>
                    <p>I’m a developer</p>
                </div>
                <div className={style.photo}>
                    <img/>
                </div>
            </div>
        </div>
    );
};
export default Home;