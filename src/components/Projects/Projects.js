import React from "react";
import styles from "./Projects.module.scss";

const Projects = () => {
    return (
        <div className="page ProjectsPage">
            <hgroup>
                <h4 className={styles.greetingsTitle}>Projects</h4>
            </hgroup>
            <ul className="projectsList">
                <li className="projectsList_item">
                    <div className="media"></div>
                    <div className="projectsList_content">
                        <div className="titleBubble">Project 01</div>
                        <h3>Project 01 title</h3>
                        <p>Test I'm a paragraph. Click here to add your own text and edit me.
                        It’s easy. Just click “Edit Text” or double click me and you can
                        start adding your own content and make changes to the font. Feel
                        free to drag and drop me anywhere you like on your page. I’m a
                        great place for you to write more. Tell a story and let your
                        users get to know you.</p>
                    </div>
                </li>
                <li className="projectsList_item">
                    <div className="media"></div>
                    <div className="projectsList_content">
                        <div className="titleBubble">Project 01</div>
                        <h3>Project 01 title</h3>
                        <p>Test I'm a paragraph. Click here to add your own text and edit me.
                        It’s easy. Just click “Edit Text” or double click me and you can
                        start adding your own content and make changes to the font. Feel
                        free to drag and drop me anywhere you like on your page. I’m a
                        great place for you to write more. Tell a story and let your
                        users get to know you.</p>
                    </div>
                </li>
                <li className="projectsList_item">
                    <div className="media"></div>
                    <div className="projectsList_content">
                        <div className="titleBubble">Project 01</div>
                        <h3>Project 01 title</h3>
                        <p>Test I'm a paragraph. Click here to add your own text and edit me.
                        It’s easy. Just click “Edit Text” or double click me and you can
                        start adding your own content and make changes to the font. Feel
                        free to drag and drop me anywhere you like on your page. I’m a
                        great place for you to write more. Tell a story and let your
                        users get to know you.</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Projects;
