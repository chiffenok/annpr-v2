import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from './containers/Layout/Layout';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faEnvelope, faShareAlt, faCopyright} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faLinkedinIn, faXingSquare, faXing, faGithub, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedin, faLinkedinIn, faXingSquare, faXing, faGithubSquare, faGithub, faEnvelope, faShareAlt, faCopyright, faPhone);

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout/>
            </BrowserRouter>
        );
    }
}

export default App;
