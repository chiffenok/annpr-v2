import React from "react";
import styles from "./Contacts.module.scss";

const Contacts = () => {
    return (
        <div className="ContactsPage">
            <hgroup>
                <h4 className={styles.greetingsTitle}>Contacts</h4>
            </hgroup>
            <div className="contacts"></div>
            <div className="form">
                <form action="">
                    <div><input type="name" placeholder="Name *"/></div>
                    <div><input type="email" placeholder="Email"/></div>
                    <div><input type="subject" placeholder="Subject"/></div>
                    <div><textarea name="" id="" cols="30" rows="10">Message</textarea></div>
                </form>
            </div>
        </div>
    );
};

export default Contacts;
