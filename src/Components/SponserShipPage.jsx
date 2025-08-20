import React from 'react';
import '../Styles/SponserShipPage.css'; // Create this CSS file for styling
import { FaWifi, FaFire, FaBell, FaGift,FaComments} from 'react-icons/fa';
const SponsorshipPage = () => {
  return (
    <div className="sponsorship-page"id='sponsorships'>
      <div className="header"><div className='sponser-icon'>
        <FaGift size={50} color="#7c3aed" /></div>
        <h2>Sponsorship opportunities</h2>
        <p className="intro">
          As a passionate advocate for ethical community education and fostering meaningful connections, 
          I offer unique sponsorship opportunities that benefit both your company and the broader developer community.
        </p>
        <button className="contact-button">Get in touch</button>
      </div>

      <div className="opportunities-container">
        <div className="opportunity-card"><div className='sponser-icon'>
          <FaWifi size={50} color="#7c3aed" /></div>
          <h3>Dynamic content creation</h3>
          <p>
            Leveraging my 70+ YouTube subscribers, I create engaging video content and write insightful 
            blog posts, including newsletters. These platforms are perfect for educating the community about 
            your projects and initiatives.
          </p>
        </div>

        <div className="opportunity-card">
          <div className='sponser-icon'>
          <FaFire size={50} color="#7c3aed" /></div>
          <h3>Strategic consulting</h3>
          <p>
            With my experience in growing numerous open-source projects, I provide consultancy services 
            to attract quality contributors and users, enhancing the
          </p>
        </div>

        <div className="opportunity-card">
          <div className='sponser-icon'>
          <FaBell size={50} color="#7c3aed" /></div>
          <h3>Engaging events</h3>
          <p>
            I host a variety of events, both online and in-person, attended by thousands. This includes 
            webinars, podcasts, and more, offering sponsors significant visibility and interaction 
            opportunities with an enthusiastic audience.
          </p>
        </div>

        <div className="opportunity-card"><div className='sponser-icon'>
          <FaComments size={50} color="#7c3aed" /></div>
          <h3>DevRel support</h3>
          <p>
            I extend support to your Developer Relations efforts, aligning with your team to maximize 
            outreach and engagement, leveraging my expertise to boost your
          </p>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipPage;