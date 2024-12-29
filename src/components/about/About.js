import React from 'react';
import "./about.css";

function About() {
  return (
    <div className="about d-flex justify-content-center align-items-center">
        <div className="container">
          <div className='d-flex'><h1>About Us</h1>
          </div>
    <p>   Welcome to My website Todo List, where innovation meets excellence.
       Founded in 2024, our mission is to [state your mission, e.g., deliver high-quality solutions, 
       create lasting value, etc.]. With a dedicated team of professionals, we specialize in [your area 
       of expertise, e.g., technology, design, manufacturing, etc.], committed to transforming ideas into impactful realities.
       <br/> Our core values of [list core values, e.g., integrity, collaboration, and sustainability] drive us to exceed expectations and build lasting relationships with our clients and partners.
       Join us on this journey as we continue to inspire, innovate, and make a difference.</p>
        </div>
        </div>
  );
};

export default About;