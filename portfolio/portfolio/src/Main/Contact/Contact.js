import React from 'react';
import style from './Contact.module.css'
import styleContainer from '../../common/styles/Container.module.css';


const Contact = () => {
    return (
        <div className={style.contact}>
            <div className={styleContainer.container}>
                <div className={style.section_heading}>
                    <h2>Get in Touch</h2>
                    <p>Feel free to contact me anytime</p>
                </div>
                <div className={style.contact_block}>
                    <form>
                        <div className={style.row}>
                            <div className={style.form_group}>
                                <input className={`${style.form_control} ${style.contact_name}`} type="text" name="name"
                                       placeholder="Name" required=""/>
                            </div>
                            <div className={style.form_group}>
                                <input className={`${style.form_control} ${style.contact_email}`} type="email"
                                       name="email" placeholder="Email" required=""/>
                            </div>
                        </div>
                        <div className={style.form_group}>
                            <input className={`${style.form_control} ${style.contact_subject}`} type="text"
                                   name="subject" placeholder="Subject" required=""/>
                        </div>
                        <div className={style.form_message}>
                                <textarea className={`${style.form_control} ${style.contact_message}`} name="message"
                                          placeholder="Message" rows="5" required="">
                                </textarea>
                        </div>
                        <div className={style.content_button}>
                            <button className={style.button_red} type="submit">Send message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Contact;