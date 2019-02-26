import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./Contacts.module.scss";

const Contacts = () => {
    return (
        <div className="ContactsPage">
            <h4 className={styles.greetingsTitle}>Contacts</h4>
            <div className="contacts">
                <p><b>Cell </b>123-456-7890</p>
                <p><b>Email </b>info@mysite.com</p>
                <ul className="social-links">
                    <li className=""><a href="https://www.linkedin.com/in/anna-presnyakova-204b535a/"><FontAwesomeIcon  icon={['fab', 'linkedin']} size="2x"/></a></li>
                    <li className=""><a href="https://www.xing.com/profile/Anna_Presnyakova/"><FontAwesomeIcon  icon={['fab', 'xing-square']} size="2x"/></a></li>
                    <li className=""><a href="https://github.com/chiffenok"><FontAwesomeIcon  icon={['fab', 'github-square']} size="2x"/></a></li>
                </ul>
            </div>
            <div className="form">
                <form action="https://formspree.io/apresnyakova88@gmail.com">
                    <p>Looking forward to answering your email</p>
                    <div>
                        <input name="name" type="name" placeholder="Name *" />
                    </div>
                    <div>
                        <input name="email" type="email" placeholder="Email" />
                    </div>
                    <div>
                        <input name="subject" type="subject" placeholder="Subject" />
                    </div>
                    <div>
                        <textarea name="message" name="" id="" cols="30" rows="10">
                            Message
                        </textarea>
                    </div>
                    <div><button>Send</button></div>
                </form>
            </div>
        </div>
    );
};

export default Contacts;
