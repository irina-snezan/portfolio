import React from 'react';
import style from './Nav.module.css'

const Nav = () => {
    return (
        <ul className={style.nav}>
            <li className={style.nav_link_active}>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contacts</li>
        </ul>
    );
};

export default Nav;