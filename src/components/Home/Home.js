import React from "react";
import styles from './Home.module.scss';
import woman from './../../common/img/woman.jpeg'

const Home = () => {
    return (
        <div className="HomePage">
            <aside className="photo">
                <img src={woman} />
            </aside>
            <article className="contentHello">
                <hgroup>
                    <h4 className={styles.greetingsTitle}>Hello,</h4>
                    <h4 className={styles.greetingsTitle}>Let me tell about me</h4>
                    <div className="circleMenu">
                        <a href="#">My Resume</a>
                        <a href="#">My work</a>
                        <a href="#">My skils</a>
                    </div>
                    <p className="introParagraph">
                        I'm a paragraph. Click here to add your own text and
                        edit me. It’s easy. Just click “Edit Text” or double
                        click me and you can start adding your own content and
                        make changes to the font. Feel free to drag and drop me
                        anywhere you like on your page. I’m a great place for
                        you to write more. Tell a story and let your users get
                        to know you.
                    </p>
                </hgroup>
            </article>
        </div>
    );
};

export default Home;
