import React from "react";

const Header = () => {
    return (
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
    );
};

export default Header;
