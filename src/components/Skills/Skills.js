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
                        Test I'm a paragraph. Click here to add your own text and edit me.
                        It’s easy. Just click “Edit Text” or double click me and you can
                        start adding your own content and make changes to the font. Feel
                        free to drag and drop me anywhere you like on your page. I’m a
                        great place for you to write more. Tell a story and let your
                        users get to know you.
                    </p>
                </li>
                <li className="contentCv_item">
                    <h3 className="titleBubble">Work​ experience​</h3>
                    <ul className="contentCv_subul">
                        <li className="contentCv_subitem">
                            <h3>Job position.</h3>
                            <div className="date">​2010 - present</div>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to write more. Tell a story about yourself.</p>
                        </li>
                        <li className="contentCv_subitem">
                            <h3>Job position.</h3>
                            <div className="date">​2010 - present</div>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to write more. Tell a story about yourself.</p>
                        </li>
                        <li className="contentCv_subitem">
                            <h3>Job position.</h3>
                            <div className="date">​2010 - present</div>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to write more. Tell a story about yourself.</p>
                        </li>
                    </ul>
                </li>
                <li className="contentCv_item">
                    <h3 className="titleBubble">Education</h3>
                    <ul className="contentCv_subul">
                        <li className="contentCv_subitem">
                            <h3>Job position.</h3>
                            <div className="date">​2010 - present</div>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to write more. Tell a story about yourself.</p>
                        </li>
                        <li className="contentCv_subitem">
                            <h3>Job position.</h3>
                            <div className="date">​2010 - present</div>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to write more. Tell a story about yourself.</p>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul className="asideCv">
                <div className="asideCv_item">
                    <div className="icon"><FontAwesomeIcon icon="exclamation" size="lg"/></div>
                    <h4>Skills</h4>
                    <p>PHOTOSHOP
                        FLASH
                        Click to add a skill
                        Click to add a skilll
                        Click to add a skill</p>
                </div>
                <div className="asideCv_item asideCv_item_2">
                    <div className="icon"><FontAwesomeIcon icon="globe-americas" size="lg"/></div>
                    <h4>Languages</h4>
                    <p>PHOTOSHOP
                        FLASH
                        Click to add a skill
                        Click to add a skill
                        Click to add a skill</p>
                </div>
            </ul>
        </div>
    );
};

export default Skills;
