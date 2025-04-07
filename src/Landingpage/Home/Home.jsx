import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/erp.png";
import "./home.css";

const Home = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/login");
    };

    return (
        <>
            <section id="home">
                <div className="intro-section-container">
                    <div className="intro-section-content">
                        {/* Left side content */}
                        <div className="intro-section-text">
                            <h1 className="intro-title">TeamTrack</h1>
                            <p className="intro-description">
                                TeamTrack is a powerful, intuitive, and efficient Employee Management System designed to streamline the way
                                organizations handle their workforce. Built with modern technologies like React.js, TeamTrack aims to provide
                                businesses with a user-friendly interface and robust functionality to improve productivity and foster team collaboration.
                            </p>
                            <button className="get-started-button" onClick={handleGetStarted}>Get Started</button>
                        </div>
                        {/* Right side image */}
                        <div className="intro-section-image">
                            <img
                                src={image}
                                alt="TeamTrack Illustration"
                                className="intro-image"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home