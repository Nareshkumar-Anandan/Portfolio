import React from 'react';
import { FaStar, FaBolt, FaCube, FaArrowRight } from 'react-icons/fa';
import '../Styles/CoursesSection.css';

const CoursesSection = () => {
  return (
    <section className="courses-container" id='courses'>
      <p className="section-label">Courses</p>
      <h2 className="section-heading">Teaching developers to upskill themselves.</h2>
      <p className="section-description">
        Join me as we break down the essentials of AI, DevOps, and modern development tools.
        Whether you're just starting out or looking to level up, these courses are built to help
        you navigate real-world tech challenges with confidence.
      </p>

      <div className="courses-grid">
        <div className="course-item">
          <div className="icon-circle">
            <FaStar size={28} className="icon" />
          </div>
          <h3 className="course-title">Widely acclaimed courses</h3>
          <p className="course-description">
            Join thousands who have benefitted from my courses, backed by thousands of positive reviews.
          </p>
        </div>

        <div className="course-item">
          <div className="icon-circle">
            <FaBolt size={28} className="icon" />
          </div>
          <h3 className="course-title">Latest tech trends webinars</h3>
          <p className="course-description">
            Regular webinars and sessions to keep you updated with the latest technological advancements.
          </p>
        </div>

        <div className="course-item">
          <div className="icon-circle">
            <FaCube size={28} className="icon" />
          </div>
          <h3 className="course-title">Free access to knowledge</h3>
          <p className="course-description">
            All courses are completely free to watch, making quality education accessible to everyone.
          </p>
        </div>
      </div>

      <div className="button-container">
        <a href="#" className="explore-button">
          Explore courses <FaArrowRight className="arrow-icon" />
        </a>
      </div>
    </section>
  );
};

export default CoursesSection;
