import React, { useState } from 'react';
import '../Styles/Contactus.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (data.success) {
      alert('✅ Message sent!');
      setForm({ name: '', email: '', message: '' });
    } else {
      alert('❌ Failed to send message.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('⚠️ Something went wrong.');
  }
};


  return (
    <section className="contact-section" id='contactus'>
         <h2 className='contact-head'>Contact Us</h2>
      <div className="contact-container">
       
        <div className="contact-details">
          <p><FaEnvelope /> contact@techwithNaresh.com</p>
          <p><FaPhoneAlt /> +91 9790550429</p>
          <p><FaMapMarkerAlt /> Coimbatore, Tamil Nadu, India</p>
        </div>
        <div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
