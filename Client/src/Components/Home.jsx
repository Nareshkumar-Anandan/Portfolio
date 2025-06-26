import React from "react";
import "../Styles/Home.css";
import profileImage from "../Assets/NK-profilePhoto.png"; // Make sure this image is placed correctly

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-left">
        <h1>Teaching millions how to code and helping businesses scale.</h1>
        <p>
          I'm Naresh Kumar, a passionate and detail-oriented web developer with a strong foundation in full stack development.
I have hands-on experience in building responsive websites using React, Node.js, HTML, CSS, and JavaScript.
I bring creative design thinking and problem-solving skills to every project I take on.
My aim is to create user-friendly, efficient, and modern web applications that solve real-world problems.
I am currently seeking opportunities to contribute to innovative tech teams and grow professionally.
        </p>
        <div className="button-group">
          <a href="#about" className="btn-outline">↓ Know more</a>
         <a href="mailto:techhwithnaresh@gmail.com" className="btn-filled" target="_blank">Get in touch</a>
        </div>
      </div>
      <div className="home-right">
        <img src={profileImage} alt="Nareshkumar Anandan" />
      </div>
    </div>
  );
};

export default Home;
