import React from 'react';
import style from './Portfolio.module.css'
import styleContainer from '../../common/styles/Container.module.css';
import Project from "./Project/Project";


const Portfolio = (props) => {
    return (
        <div className={style.portfolio}>
            <div className={styleContainer.container}>
                <div className={style.section_heading}>
                    <h2>Portfolio</h2>
                    <p>Showcasing some of my best work</p>
                </div>
                <div className={style.portfolio_block}>
                    <Project title={'Wildlife'}/>
                    <Project title={'SweetMix'}/>
                    <Project title={'Shelter'}/>
                    <Project title={'Museum'}/>
                    <Project title={'Social Network'}/>
                    <Project title={'Todolist'}/>
                </div>
            </div>
        </div>
    );
};
export default Portfolio;