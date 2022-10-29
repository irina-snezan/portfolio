import React from 'react';
import style from './Sidebar.module.css'
import Nav from "../Nav/Nav";

const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <div className={style.avatar}>
                <img/>
            </div>
            <span className={style.sidebarName}>Irina Shabuldajeva</span>
            <p className={style.sidebarStatus}>Available for work</p>
            <Nav/>
        </div>
    );
};

export default Sidebar;