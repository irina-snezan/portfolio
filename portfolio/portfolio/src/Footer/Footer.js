import React from 'react';
import style from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer_content}>
                <div className={style.footer_contact_info}>
                    <div>
                        <div className={style.single_info}>
                            <div className={style.info_icon}></div>
                            <p className={style.info_content}><a href="https://goo.gl/maps/2YAGiugG47VAS17g7"
                                                                 target="_blank">Minsk, Belarus.</a></p>
                        </div>
                    </div>
                    <div>
                        <div className={style.single_info}>
                            <div className={style.info_icon}></div>
                            <p className={style.nfo_content}><a href="tel:+375291695354">+375291695354</a></p>
                        </div>
                    </div>
                    <div>
                        <div className={style.single_info}>
                            <div className={style.info_icon}></div>
                            <p className={style.info_content}><a href="mailto:alex@example.com">irina@example.com</a></p>
                        </div>
                    </div>
                </div>
                <div className={style.line}></div>
                <div className={style.mini_footer}>
                    <div className={style.social_medias}>
                        <span className={style.logo_twitter}><a className={style.twitter} href="#"></a></span>
                        <span className={style.logo_linkedin}><a className={style.linkedin} href="#0"></a></span>
                        <span className={style.logo_github}><a className={style.github} href="#"></a></span>
                        <span className={style.logo_facebook}><a className={style.facebook} href="#"></a></span>
                    </div>
                    <p className={style.copyright_notice}>Copyright © 2019, all rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;