import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
const aboutUsIntroImage = "https://images.pexels.com/photos/4709387/pexels-photo-4709387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"; // Import intro image (replace placeholder path)

const About = () => {
    return (
        <div className="about-container">
            <header className="about-header">
                <h1>About Our Company</h1>
                <p className="header-tagline">We Connect the Physical and Digital Worlds with IoT Innovation</p>
            </header>

            <section className="about-intro">
                <div className="intro-content">
                    <h2 className="section-title">Driven by Innovation, Rooted in Expertise</h2>
                    <p>
                        At <strong>Mechacraft</strong>, we are passionate about leveraging the power of the Internet of Things to transform businesses and enrich lives.
                        With a deep understanding of IoT technologies and a commitment to excellence, we deliver tailored solutions that drive efficiency, sustainability, and growth.
                    </p>
                    <p>
                        Our multidisciplinary team combines expertise in hardware, software, and cloud computing to create intelligent, connected systems. We pride ourselves on
                        our collaborative approach, working closely with our clients to understand their unique challenges and deliver impactful results.
                    </p>
                    <p>
                        From smart agriculture to intelligent manufacturing, we are at the forefront of IoT innovation, helping our partners navigate the complexities of the digital age and unlock new possibilities.
                    </p>
                </div>
                <div className="intro-image">
                    <img src={aboutUsIntroImage} alt="Team collaborating on IoT project" />
                </div>
            </section>

            <section className="about-values">
                <h2 className="section-title">Our Core Values</h2>
                <ul className="values-list">
                    <li className="value-item">
                        <i className="fas fa-rocket value-icon"></i> {/* Font Awesome Icon - Innovation */}
                        <div className="value-text">
                            <strong>Innovation:</strong> We are relentless in our pursuit of cutting-edge technologies and creative solutions, always striving to push the boundaries of what's possible.
                        </div>
                    </li>
                    <li className="value-item">
                        <i className="fas fa-shield-alt value-icon"></i> {/* Font Awesome Icon - Quality */}
                        <div className="value-text">
                            <strong>Quality:</strong> We uphold the highest standards of quality in everything we do, ensuring robust, reliable, and high-performing IoT solutions.
                        </div>
                    </li>
                    <li className="value-item">
                        <i className="fas fa-users value-icon"></i>     {/* Font Awesome Icon - Collaboration */}
                        <div className="value-text">
                            <strong>Collaboration:</strong> We believe in the power of partnership, working closely with our clients and stakeholders to achieve shared success and build lasting relationships.
                        </div>
                    </li>
                    <li className="value-item">
                        <i className="fas fa-lock value-icon"></i>      {/* Font Awesome Icon - Security */}
                        <div className="value-text">
                            <strong>Security:</strong> We are deeply committed to the security and privacy of data, implementing rigorous measures to protect our clients' information and ensure trust.
                        </div>
                    </li>
                </ul>
            </section>

            <section className="about-vision">
                <h2 className="section-title">Our Vision for the Future</h2>
                <p className="vision-statement">
                Mechacraft Technologies, founded in May 2024, is committed to providing innovative industrial technical solutions. Our goal is to bridge the gap between education and practical application, particularly in the field of robotics and mechanical engineering.
                </p>
            </section>

            <section className="about-contact">
                <h2 className="section-title">Let's Connect</h2>
                <p className="contact-prompt">
                    Ready to explore how IoT can transform your business? We'd love to hear from you. <Link to="/ContactUs" className="contact-link">Contact us today</Link> to start the conversation.
                </p>
            </section>

            <footer className="about-footer">
                <p>&copy; 2025 MechaCraft. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default About;