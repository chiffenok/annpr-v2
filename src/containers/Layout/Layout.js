import React from "react";
import Home from '../../components/Home/Home';
import Skills from '../../components/Skills/Skills';
import ss from '../../common/itcss.scss';
import Header from '../../components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Route, Switch} from "react-router-dom";

const Layout = () => {
    return (
        <div className="App">
            <Header/>
            <main className="main">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/skills" component={Skills} />
                </Switch>
            </main>
            <footer className="footer">
                <div>
                    <ul>
                        <li>
                            <span className="icon"><FontAwesomeIcon icon="phone" size="lg"/></span>
                            <h4>Call</h4>
                            <p>T: +49 177 18 99 365</p>
                        </li>
                        <li>
                            <span className="icon"><FontAwesomeIcon icon="envelope" size="lg"/></span>
                            <h4>Contact</h4>
                            <p><a href="mailto:apresnyakova88@gmail.com">apresnyakova88@gmail.com</a></p>
                        </li>
                        <li>
                            <span className="icon"><FontAwesomeIcon icon="share-alt" size="lg"/></span>
                            <h4>Follow Me</h4>
                            <p></p>
                        </li>
                        <li>
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
