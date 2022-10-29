import React from 'react';
import style from './Skill.module.css'

const Skill = (props) => {
    return (
        <div className={style.skill_item}>
            <div className={style.icon}></div>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    );
};
export default Skill;