import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
    const stats = [
        { number: "150+", label: "Projects Completed" },
        { number: "50+", label: "Educational Institutions" },
        { number: "25+", label: "Team Members" },
        { number: "1000+", label: "Students Empowered" }
    ];

    const expertiseAreas = [
        {
            title: "IoT Solutions",
            description: "Custom IoT implementations for smart manufacturing and industrial automation",
            icon: "🌐"
        },
        {
            title: "Circuit Designing",
            description: "Hands-on electronic circuit design and implementation for practical learning",
            icon: "⚡"
        },
        {
            title: "App Development",
            description: "Mobile application development training and project-based learning",
            icon: "📱"
        },
        {
            title: "Web Design",
            description: "Modern web development skills with practical project experience",
            icon: "💻"
        },
        {
            title: "Robotics Lab",
            description: "State-of-the-art robotics laboratory setup for schools and hands-on learning",
            icon: "🤖"
        },
        {
            title: "Hands-on Training",
            description: "Practical, interactive training sessions with real-world projects and industry-standard tools",
            icon: "🔧"
        },
        {
            title: "Smart Agriculture",
            description: "Automated farming solutions for sustainable agriculture",
            icon: "🌱"
        },
        {
            title: "AI & ML",
            description: "Intelligent systems and machine learning education for next-gen innovators",
            icon: "🧠"
        }
    ];

    return (
        <div className="about-container">
            <div className="hero-section">
                <img className="background-video" src="./assets/abt.jpeg" alt="" />
                <div className="zero-content">
                    <h1>About Us</h1>
                    <p>Mechacraft Technologies is a forward-thinking tech company dedicated to innovation, education, and development in the fields of IoT, Robotics, AI, Embedded Systems, Web Development, and AgriTech. We specialize in offering practical training and workshops tailored to school and college students, aiming to bridge the gap between academic learning and industry skills.</p>
                </div>
            </div>

            <section className="mission-section">
                <div className="content-wrap">
                    <div className="text-content">
                        <h2>Our Mission & Vision</h2>
                        <p>At Mechacraft Technologies, we're on a mission to bridge the gap between academic knowledge and practical industry skills. </p>
                        <p>We believe that hands-on experience is the cornerstone of effective learning in technology fields.</p>
                    </div>
                    <div className="stats-container">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="expertise-section">
                <h2>Our Areas of Excellence</h2>
                <div className="expertise-grid">
                    {expertiseAreas.map((area, index) => (
                        <div key={index} className="expertise-card">
                            <div className="card-icon">{area.icon}</div>
                            <h3>{area.title}</h3>
                            <p>{area.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="vision-section">
                <div className="vision-content">
                    <h2>Looking to the Future</h2>
                    <p>As we look ahead, we're committed to pushing the boundaries of what's possible in technology. Our vision is to create a more connected, efficient, and sustainable world through innovative solutions.</p>
                    <Link to="/ContactUs" className="cta-button">Start Your Journey With Us</Link>
                </div>
            </section>

            <footer className="about-footer">
                <p>&copy; 2025 MechaCraft. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default About;