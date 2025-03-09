import React from "react"
import image from "../../assets/erp.png"
import "./about.css"
import Card from "./Card"
const About = () => {
    return (
        <>
            <section className="about-section">
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
                            <button className="get-started-button">Get Started</button>
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

                {/* Features Section */}
                <div className="about-section-container">
                    <div className="about-section-content">
                        <div className="about-section-text">
                            <h1 className="about-title">About Employee Management System</h1>
                            <p className="about-description">
                                Managing employees effectively is the cornerstone of every successful organization. The Employee Management System (EMS) offers a centralized platform to streamline administrative tasks, improve communication, and optimize employee performance. This modern solution addresses challenges like managing schedules, tracking progress, and analyzing team performance, making it an essential tool for businesses of all sizes.
                            </p>
                            <h2 className="about-subtitle">Why Choose Our EMS?</h2>
                            <p className="about-description">
                                Our Employee Management System is designed to empower organizations by simplifying complex workflows. With features such as role-based access, real-time analytics, and performance tracking, EMS enables managers to focus on driving results.
                                Whether you are overseeing a small team or managing a large enterprise, our EMS ensures efficiency, accuracy, and transparency at every level.
                            </p>
                        </div>
                        <div className="about-section-image">
                            <img
                                src="https://leapmax.ai/wp-content/uploads/2024/10/employee-management-system.webp"
                                alt="About Employee Management" width="100%"
                                className="about-image"
                            />
                        </div>
                    </div>
                    <div className="about-additional-box">
                        <h2 className="additional-box-title">Key Features of Our EMS</h2>
                        <ul className="feature-list">
                            <li>Role-based dashboards for Admins, Managers, and Employees.</li>
                            <li>Comprehensive performance and project tracking tools.</li>
                            <li>Seamless user authentication for secure access.</li>
                            <li>Insights through detailed reports and analytics.</li>
                            <li>Customizable workflows to meet unique organizational needs.</li>
                        </ul>
                        <p className="feature-highlight">
                            With our Employee Management System, you'll experience enhanced productivity, improved team coordination, and better decision-making powered by accurate data and analytics.
                        </p>
                    </div>
                </div>
                <Card />
            </section>
        </>
    )
}
export default About 