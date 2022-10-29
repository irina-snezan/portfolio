import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css';
import Skill from "./Skill/Skill";

const Skills = (props) => {
    return (
        <div className={style.skills}>
            <section className={styleContainer.container}>
                <div className={style.section_heading}>
                    <h2>My Skills</h2>
                    <p>Services i offer to my clients</p>
                </div>
                <div className={style.skills_block}>
                    <Skill title={'Html'}/>
                    <Skill title={'Css'}/>
                    <Skill title={'Js'}/>
                    <Skill title={'Typescript'}/>
                    <Skill title={'React'}/>
                    <Skill title={'Redux'}/>
                    <Skill title={'Git'}/>
                    <Skill title={'Rest API'}/>
                    <Skill title={'Figma'}/>
                </div>
            </section>
        </div>
    );
};
export default Skills;