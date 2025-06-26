import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col brand-col">
          <h2>Nareshkumar Anandan</h2>
          <p>contact@techwithnaresh.com</p>
        </div>

        <div className="footer-col">
          <h4>Socials</h4>
          <ul>
            <a href="https://www.youtube.com/channel/UCvMaYteXkCPViSMwj08rfkg" className="anchar" target="_blank"><li>YouTube</li></a>
            <a href="https://x.com/home" className="anchar" target="_blank"><li>Twitter</li></a>
            <a href="https://www.linkedin.com/in/nareshkumar-anandan-739189270/" className="anchar" target="_blank"><li>LinkedIn</li></a>
            <a href="https://www.instagram.com/_nk_.7/" className="anchar" target="_blank"><li>Instagram</li></a>
            {/* <li>Bluesky</li>
            <li>TikTok</li> */}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Other</h4>
          <ul>
            <a href="https://github.com/Nareshkumar-Anandan" className="anchar" target="_blank"><li>GitHub</li></a>
            {/* <li>Reddit</li>
            <li>Credly</li> */}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <a href="/"><li>Home</li></a>
            <a href="#about"><li>Blog</li></a>
            <a href="#sponsorships"></a><li>Sponsorships</li>
            <a href="#Courses"></a><li>Courses</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-bottom">© 2024 Nareshkumar Anandan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
