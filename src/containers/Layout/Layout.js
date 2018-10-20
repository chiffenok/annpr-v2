import React from "react";
import Home from '../../components/Home/Home';
import '../Layout/Layout.css';

const Layout = () => {
    return (
        <div className="App">
            <header className="App-header">
                <div className="titles">
                    <h1>Anna Presnyakova</h1>
                    <h2>Web-Developer</h2>
                </div>
                <nav>
                    <ul className='ul'>
                        <li>Home</li>
                        <li>Resume</li>
                        <li>Projects</li>
                        <li>Contacts</li>
                    </ul>
                </nav>
            </header>
            <Home/>
            <footer>
                <div>footer</div>
            </footer>
        </div>
    );
};

export default Layout;
