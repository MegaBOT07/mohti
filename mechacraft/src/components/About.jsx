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
                <img className="background-video" src="https://images.pexels.com/photos/5265274/pexels-photo-5265274.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <div className="hero-content">
                    <h1>Empowering Learners Through Innovation</h1>
                    <p>Building Tomorrow's Tech Leaders Today</p>
                </div>
            </div>

            <section className="mission-section">
                <div className="content-wrap">
                    <div className="text-content">
                        <h2>Our Mission</h2>
                        <p>At Mechacraft, we're dedicated to revolutionizing education through innovative technological solutions. We empower students and educators with hands-on learning experiences in robotics, programming, and digital technologies.</p>
                        <p>Our commitment to excellence drives us to create engaging, practical learning environments that prepare students for the digital future.</p>
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
                <p>&copy; 2025 Mechacraft Technologies. Innovating for a Better Tomorrow.</p>
            </footer>
        </div>
    );
};

export default About;