import React, { useState } from "react";
import "./header.css";
import image1 from "../../assets/TeamTrack_Logo.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <header>
                <div className="logo-container">
                    <img src={image1} alt="logo" width={50} height={50} />
                </div>
                
                <button className="mobile-menu-button" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
                <div className={`navlinks ${menuOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={closeMenu}>Home</a>
                    <a href="#about" onClick={closeMenu}>About</a>
                    <a href="#cards" onClick={closeMenu}>Services</a>
                    <a href="#footer" onClick={closeMenu}>Contact</a>
                </div>
            </header>
        </>
    );
};

export default Header