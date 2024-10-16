import React from "react";
import '../styles/main.scss';

const Header = () => {
    return(
        <header className="header">
            <img src="logo.png" alt="Logo" className="header__logo"/>
            <nav lassName="header__nav">
                <a href="/" className="header__nav-item">Inicio</a>
                <a href="/about" className="header__nav-item">Nosotros</a>
            </nav>
        </header>
    );
};

export default Header;