import React from "react";
import styles from "./Home.module.scss";
import {Link} from "react-router-dom";
import woman from "./../../common/img/woman.jpeg";

const Home = () => {
    return (
        <div className="HomePage">
            <aside className="photo">
                <img alt="Anna Presnyakova" src={woman} />
            </aside>
            <hgroup>
                <h4 className={styles.greetingsTitle}>Hello,</h4>
                <h4 className={styles.greetingsTitle}>a bit about me:</h4>
            </hgroup>
            <ul className="circleMenu">
                <li><Link to="/skills">My Resume</Link></li>
                <li><Link to="/projects">My Work</Link></li>
                <li><Link to="/skills">My Skills</Link></li>
            </ul>
            <p className="introParagraph">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me and you can
                start adding your own content and make changes to the font. Feel
                free to drag and drop me anywhere you like on your page. I’m a
                great place for you to write more. Tell a story and let your
                users get to know you.
            </p>
        </div>
    );
};

export default Home;