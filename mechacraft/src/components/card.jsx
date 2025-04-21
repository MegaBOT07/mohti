import React from 'react';
import './card.css';
import { FaHandshake, FaUsers, FaCalendarCheck, FaCertificate, FaUniversity, FaLaptopCode } from 'react-icons/fa';

const Card = () => {
  return (
    <div className="collaboration-services">
      <h3 className="collaboration-title">How We can Collaborate</h3>
      <div className="collaboration-grid">
        <div className="collaboration-card">
          <span className="collaboration-card__icon">
            <FaHandshake />
          </span>
          <h3 className="collaboration-card__title">MoU Model</h3>
          <p className="collaboration-card__text">Formal partnership with defined scope of training programs, workshops, and events.</p>
        </div>

        <div className="collaboration-card">
          <span className="collaboration-card__icon">
            <FaUsers />
          </span>
          <h3 className="collaboration-card__title">Tech Club Support</h3>
          <p className="collaboration-card__text">Regular mentorship and resources for your institution's technology clubs and groups.</p>
        </div>

        <div className="collaboration-card">
          <span className="collaboration-card__icon">
            <FaCalendarCheck />
          </span>
          <h3 className="collaboration-card__title">Annual Tie-up</h3>
          <p className="collaboration-card__text">Structured year-round technical training plan with periodic workshops and sessions.</p>
        </div>

        <div className="collaboration-card">
          <span className="collaboration-card__icon">
            <FaCertificate />
          </span>
          <h3 className="collaboration-card__title">Certification Programs</h3>
          <p className="collaboration-card__text">Industry-recognized certification courses for students with placement assistance.</p>
        </div>

        <div className="collaboration-card">
          <span className="collaboration-card__icon">
            <FaUniversity />
          </span>
          <h3 className="collaboration-card__title">Campus Technology</h3>
          <p className="collaboration-card__text">Establish a dedicated innovation lab or technology center on your Campus.</p>
        </div>

        <div className="collaboration-card">
          <span className="collaboration-card__icon">
            <FaLaptopCode />
          </span>
          <h3 className="collaboration-card__title">Student Internships</h3>
          <p className="collaboration-card__text">Exclusive internship opportunities for students in ongoing projects.</p>
        </div>
      </div>
    </div>
  );
};

export default Card;