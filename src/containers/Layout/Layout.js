import React from "react";
import Home from '../../components/Home/Home';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import Contacts from '../../components/Contacts/Contacts';
import itcss from '../../common/itcss.scss';
import Header from '../../components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Route, Switch} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Layout = () => {
    return (
        <div className="App">
            <div className="content">
                <Header/>
                <main className="main">
                    <Route render={({location}) => (
                        <TransitionGroup>
                            <CSSTransition
                                key={location.key}
                                timeout={450}
                                classNames={"fade"}
                            >
                                <Switch location={location}>
                                    <Route exact path="/" component={Home} />
                                    <Route path="/skills" component={Skills} />
                                    <Route path="/projects" component={Projects} />
                                    <Route path="/contacts" component={Contacts} />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )} />
                </main>
            </div>
            <footer className="footer">
                <div>
                    <ul className="footerItemsList">
                        <li className="footerItem">
                            <span className="icon"><FontAwesomeIcon icon="phone" size="lg"/></span>
                            <h4>Call</h4>
                            <p>T: +49 177 18 99 365</p>
                        </li>
                        <li className="footerItem">
                            <span className="icon"><FontAwesomeIcon icon="envelope" size="lg"/></span>
                            <h4>Contact</h4>
                            <p><a href="mailto:apresnyakova88@gmail.com">apresnyakova88@gmail.com</a></p>
                        </li>
                        <li className="footerItem">
                            <span className="icon"><FontAwesomeIcon icon="share-alt" size="lg"/></span>
                            <h4>Follow Me</h4>
                            <ul className="social-links">
                                <li className=""><a href="https://www.linkedin.com/in/anna-presnyakova-204b535a/"><FontAwesomeIcon  icon={['fab', 'linkedin-in']} size="lg"/></a></li>
                                <li className=""><a href="https://www.xing.com/profile/Anna_Presnyakova/"><FontAwesomeIcon  icon={['fab', 'xing']} size="lg"/></a></li>
                                <li className=""><a href="https://github.com/chiffenok"><FontAwesomeIcon  icon={['fab', 'github']} size="lg"/></a></li>
                            </ul>
                        </li>
                        <li className="footerItem">
                            <span className="icon"><FontAwesomeIcon icon="copyright" size="lg"/></span>
                            <p>2019 Anna Presnyakova</p>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
