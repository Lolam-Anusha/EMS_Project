import React from "react";
import "./about.css";

const About = () => {
    return (
        <>
            <section id="about">
                <div className="about-section-container">
                    <div className="about-section-content">
                        <div className="about-section-text">
                            <h1 className="about-title">About Team Track</h1>
                            <p className="about-description">
                                Managing employees effectively is the cornerstone of every successful organization. The Employee Management System (EMS) Team Track offers a centralized platform to streamline administrative tasks, improve communication, and optimize employee performance. This modern solution addresses challenges like managing schedules, tracking progress, and analyzing team performance, making it an essential tool for businesses of all sizes.
                            </p>
                            <h2 className="about-subtitle">Why to Choose Team Track?</h2>
                            <p className="about-description">
                                Team Track is designed to empower organizations by simplifying complex workflows. With features such as role-based access, real-time analytics, and performance tracking, Team Track enables managers to focus on driving results.
                                Whether you are overseeing a small team or managing a large enterprise, Team Track ensures efficiency, accuracy, and transparency at every level.
                            </p>
                        </div>
                        <div className="about-section-image">
                            <img
                                src="https://leapmax.ai/wp-content/uploads/2024/10/employee-management-system.webp"
                                alt="About Employee Management"
                                className="about-image"
                            />
                        </div>
                    </div>
                    <div className="about-additional-box">
                        <h2 className="additional-box-title">Key Features of Team Track</h2>
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
            </section>
        </>
    );
};

export default About