import React from 'react';
import style from './Project.module.css'

const Project = (props) => {
    return (
        <div className={style.project_item}>
            <h4>{props.title}</h4>
            <p>More Info...</p>
        </div>
    );
};
export default Project;