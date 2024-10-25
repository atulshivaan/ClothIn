import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="h1-tag">ClothesIn</h1>
      
      <section className="about-section">
        <h2>About Us</h2>
        <p>At ClothesIn, our mission is to bring the latest in fashion trends directly to your doorstep. We believe that fashion should be accessible, affordable, and sustainable for everyone, everywhere.</p>
      </section>
      
      <section className="about-section">
        <h2>What We DO</h2>
        <p>From casual wear to high-end fashion, ClothesIn offers a wide range of clothing and accessories for men, women, and kids. Our collections are updated seasonally to bring you the best of global trends, so you can shop with confidence knowing you’re always in style.</p>
      </section>
      
      <section className="about-section">
        <h2>Our Values</h2>
        <ul className="about-values">
          <li><strong>Quality:</strong> We source only the best materials and ensure each piece is crafted to perfection.</li>
          <li><strong>Sustainability:</strong> ClothesIn is committed to eco-friendly practices, including sustainable sourcing and packaging.</li>
          <li><strong>Customer Satisfaction:</strong> Our customers are at the heart of everything we do. We provide easy returns, fast shipping, and responsive customer support.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
