import React from "react";
import Home from '../../components/Home/Home';
import ss from '../../common/itcss.scss';

const Layout = () => {
    return (
        <div className="App">
            <header className="header">
                <div className="titlesName">
                    <h1>Anna Presnyakova</h1>
                    <h2>Web-Developer</h2>
                </div>
                <nav className="navigation">
                    <ul className="navigationList">
                        <li>Home</li>
                        <li>Resume</li>
                        <li>Projects</li>
                        <li>Contacts</li>
                    </ul>
                </nav>
            </header>
            <main className="main">
                <Home/>
            </main>
            <footer className="footer">
                <div>footer</div>
            </footer>
        </div>
    );
};

export default Layout;
