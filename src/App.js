import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from './containers/Layout/Layout';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faEnvelope, faShareAlt, faCopyright} from '@fortawesome/free-solid-svg-icons';

library.add(faPhone, faEnvelope, faShareAlt, faCopyright);

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
