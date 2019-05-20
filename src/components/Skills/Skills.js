import React from "react";
import styles from "./Skills.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skills = () => {
    return (
        <div className="page SkillsPage">
            <hgroup>
                <h4 className={styles.greetingsTitle}>Resume</h4>
            </hgroup>
            <ul className="contentCv">
                <li className="contentCv_item">
                    <h3 className="titleBubble">Professional ​info​​</h3>
                    <p className="introParagraph">
                        I am Software Engineer at Rewe Group, specializing in Frontend development. I want to make the web better by developing a high-quality and user-friendly application. I realize that the web highly dynamic ecosystem which constantly changing, web-developers should keep up with new trends and always continue to learn. And that’s what I like the most about my job. Working in e-commerce application with an agile team taught me to adapt to requirements’ changes and delivered changes often. <br/>
                        At my current job, JavaScript, ReactJs, Html, and CSS are my everyday working tools. My passion also data visualisation, I would like to work with JavaScript libraries such as ApexChartsJs. At the moment, I am based on Cologne, Germany. However, I open to new challenges and relocation.
                    </p>
                </li>
                <li className="contentCv_item">
                    <h3 className="titleBubble">Work​ experience​</h3>
                    <ul className="contentCv_subul">
                        <li className="contentCv_subitem">
                            <h3>Software Engineer, Frontend</h3>
                            <h4>REWE digital. Cologne, Germany</h4>
                            <div className="date">​03.2018 – present</div>
                            <p>
                                Developed new UI functionality for e-commerce food delivery online shop. <br/>
                                Developed and maintained critical micro-services, including navigation, orders history, and favorites lists, using React components. <br/>
                                Worked in agile team in collaboration with various developer teams, UX/UI team, product owner and other stakeholders. <br/>
                            </p>
                        </li>
                        <li className="contentCv_subitem">
                            <h3>Werkstudent - JavaScript, HTML & CSS Developer </h3>
                            <h4>TOMRA Sorting GmbH. Germany, Mülheim-Kärlich</h4>
                            <div className="date">12.2014 – 11.2016</div>
                            <p>
                                Created API documentation for CUI(common user interface). <br/>
                                Created and maintained AngularJs directives. <br/>
                                Created style themes for Web-interface. <br/>
                                Worked with corporate icon-set (transforming to svg, created directive).
                            </p>
                        </li>
                        <li className="contentCv_subitem">
                            <h3>Web-developer</h3>
                            <h4>FAKTUM Bauprodukte e.K. Germany,  Freudenberg</h4>
                            <div className="date">02.2014 – 03.2014</div>
                            <p>Created a  corporate web-site, using Wordpress.</p>
                        </li>
                        <li className="contentCv_subitem">
                            <h3>Web-developer</h3>
                            <h4>FIS. Russia, Novosibirsk</h4>
                            <div className="date">03.2013 – 10.2013</div>
                            <p>Maintained and developed the corporate websites using PHP, JQuery, Html and CSS.</p>
                        </li>
                        <li className="contentCv_subitem">
                            <h3>Html-developer</h3>
                            <h4>Alleanza. Russia, Novosibirsk,</h4>
                            <div className="date">​03.2012 – 03.2013</div>
                            <p>Created Html-templates for web-sites using dynamic elements on JavaScript, JQuery</p>
                        </li>
                    </ul>
                </li>
                <li className="contentCv_item">
                    <h3 className="titleBubble">Education</h3>
                    <ul className="contentCv_subul">
                        <li className="contentCv_subitem">
                            <h3>Master Web-Science</h3>
                            <h4>Universität Koblenz-Landau</h4>
                            <div className="date">04.2014 – 09.2017</div>
                            <p>
                                Main subjects: Semantic Web, Web retrieval, Network Theory & Dynamic Systems Analysis, Computational Social Science, Machine Learning and Data Mining, Data Science, Web engineering, Online Consumer Behavior, Entrepreneurship, Business Process Management
                            </p>
                        </li>
                        <li className="contentCv_subitem">
                            <h3>Diploma in Information Technology</h3>
                            <div className="date">09.2005 – 08.2010</div>
                            <h4>Novosibisk State Water Transport Academy (Novosibirsk, Russia)</h4>
                            <p>
                                Main subjects: Web technologies, Viruses and their control, Human-Computer Interaction, Data Managment, Computer Modeling Systems, Programing-technology, etc.
                            </p>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul className="asideCv">
                <div className="asideCv_item">
                    <div className="icon"><FontAwesomeIcon icon="exclamation" size="lg"/></div>
                    <h4>Skills</h4>
                    <p>JavaScript (ES6, native fetch API), ReactJS, React Router, Material UI, Jest, HTML5, CSS (SCSS, media queries & responsiveness), Bootstrap, Webpack, Git, Postman, Agile Methodologies (Scrum)
                        AngularJS1, JQuery, PHP</p>
                </div>
                <div className="asideCv_item asideCv_item_2">
                    <div className="icon"><FontAwesomeIcon icon="globe-americas" size="lg"/></div>
                    <h4>Languages</h4>
                    <p>English - fluent <br/> German - B1 <br/> Spanish - A2 <br/> Russian - mother tongue</p>
                </div>
            </ul>
        </div>
    );
};

export default Skills;
