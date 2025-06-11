import React from 'react';
import './SimpleWebsite.css';

// Header component
const Header = () => {
  return (
    <header className="website-header">
      <div className="logo-container">
        <img src="/fptulogo.jpg" alt="FPT University Logo" className="logo" />
        <h1 className="university-name">FPT UNIVERSITY</h1>
      </div>
      <nav className="navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

// Section component
const Section = ({ id, title, content }) => {
  return (
    <section id={id} className="website-section">
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer className="website-footer">
      <p>© 2023 Website. All rights reserved.</p>
    </footer>
  );
};

// SimpleWebsite component
const SimpleWebsite = () => {
  return (
    <div className="simple-website">
      <Header />
      
      <main className="website-content">
        <Section 
          id="about" 
          title="About" 
          content="This is the about section of the website." 
        />
        
        <Section 
          id="contact" 
          title="Contact" 
          content="For any inquiries, please contact us at example@example.com." 
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default SimpleWebsite; 