import React from 'react'
import profile from "../assets/world_img-removebg-preview.png"
import About from './About';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
 const navigate = useNavigate();
 return (
    <>
    
    <section className="hero">
      {/* Left Content */}
      <div className="hero-text">
        <h1>
          Explore the World, One <br /> Country at a Time.
        </h1>

        <p>
          Discover the history, culture, and beauty of every nation.
          Sort, search, and filter through countries to find the details you need.
        </p>

        <button className="hero-btn" onClick={() => navigate("/country")}> Start Exploring →</button>
      </div>
      {/* Right Image */}
      <div className="hero-image">
        <img src={profile} alt='...' />
      </div>
    </section>
  </>
);
};

export default Home;