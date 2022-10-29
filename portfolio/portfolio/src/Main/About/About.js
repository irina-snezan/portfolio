import React from 'react';
import style from './About.module.css'
import styleContainer from '../../common/styles/Container.module.css';

const About = () => {
    return (
        <div className={styleContainer.container}>
            <div className={style.section_heading}>
                <h2>About me</h2>
                <p>Get to know me</p>
            </div>
            <div className={style.content_block}>
                <div className={style.about_img}>
                    my photo
                    <img/>
                </div>
                <div className={style.content_description}>
                    <p>Who am i?</p>
                    <h3>I'm Irina, a visual UX/UI Designer and Web Developer</h3>
                    <p>I am a freelancer based in Belarus and i have been building noteworthy UX/UI designs and websites
                        for years, which comply with the latest design trends.
                        I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for
                        product evolution helps me prioritize tasks, iterate fast and deliver faster.</p>
                    <hr/>
                    <div className={style.content_info}>
                        <div>
                            <p><span>Name:</span> Irina Shabuldajeva</p>
                            <p><span>Email:</span> irina@example.com</p>
                        </div>
                        <div>
                            <p><span>Age:</span> 1</p>
                            <p><span>From:</span> Minsk, Belarus</p>
                        </div>
                    </div>
                    <div className={style.content_button}>
                        <button className={style.button_red}>Download CV</button>
                        <button className={style.button_grey}>My Work</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;