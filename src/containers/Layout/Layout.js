import React from "react";
import Home from '../../components/Home/Home';
import ss from '../../common/itcss.scss';
import Header from "../../components/Header/Header";

const Layout = () => {
    return (
        <div className="App">
            <Header/>
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
