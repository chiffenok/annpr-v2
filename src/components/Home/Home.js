import React from "react";
import styles from "./Home.module.scss";
import {Link} from "react-router-dom";
import annpr from "./../../common/img/ann2.jpg";

const Home = () => {
    return (
        <div className="page HomePage">
            <aside className="photo">
                <img alt="Anna Presnyakova" src={annpr} />
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
            <div className="introParagraph">
                <p>I am Software Engineer at Rewe Group, specializing in Frontend development. I want to make the web better by developing a high-quality and user-friendly application. I realize that the web highly dynamic ecosystem which constantly changing, web-developers should keep up with new trends and always continue to learn. And that’s what I like the most about my job. Working in e-commerce application with an agile team taught me to adapt to requirements’ changes and delivered changes often.</p>
                <p>At my current job, JavaScript, ReactJs, Html, and CSS are my everyday working tools. My passion also data visualisation, I would like to work with JavaScript libraries such as ApexChartsJs. At the moment, I am based on Cologne, Germany. However, I open to new challenges and relocation.</p>
            </div>
        </div>
    );
};

export default Home;
