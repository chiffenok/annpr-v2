import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Header extends Component {
    constructor (props) {
        super(props);
        this.toggleClass = this.toggleClass.bind(this);
        this.state = {
            stateNav: false
        }
    }

    toggleClass() {
        this.setState({stateNav: !this.state.stateNav})
        console.log(this.state.stateNav);
    }

    render () {
        return (
            <header className="header">
                <div className="titlesName">
                    <h1>Anna Presnyakova</h1>
                    <h2>Web-Developer</h2>
                </div>
                <nav className="navigation">
                    <div className={this.state.stateNav ? "navButton opened": "navButton"} onClick={this.toggleClass}>
                        <div className="navButtonLine"></div>
                        <div className="navButtonLine"></div>
                        <div className="navButtonLine"></div>
                    </div>
                    <ul className={this.state.stateNav ? "navigationList opened": "navigationList"}>
                        <li><NavLink to="/" exact>Home</NavLink></li>
                        <li><NavLink to="/skills" exact>Resume</NavLink></li>
                        <li><NavLink to="/projects" exact>Projects</NavLink></li>
                        <li><NavLink to="/contacts" exact>Contacts</NavLink></li>
                    </ul>
                </nav>
            </header>
        );
    }    
};

export default Header;
