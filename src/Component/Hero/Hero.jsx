import React from 'react';
import "./Hero.css";
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='modern-hero'>
            {/* أشكال خلفية جمالية لتضيف عمقاً للتصميم */}
            <div className="hero-visual-blobs">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>

            <div className='hero-content-wrapper'>
                <div className='hero-text-area'>
                    <span className="hero-badge">New Arrival 2024</span>
                    <h1 className="hero-main-title">
                        Experience the <br />
                        <span className="text-gradient">Future of Tech</span>
                    </h1>
                    <p className="hero-subtitle">
                        Discover the latest flagship smartphones with 
                        unbeatable prices and premium global warranty.
                    </p>
                    
                    <div className="hero-btn-group">
                        <Link to="/Shop-All" className="hero-primary-btn">
                            Shop Now
                        </Link>
                        <Link to="/about-us" className="hero-secondary-btn">
                            Learn More
                        </Link>
                    </div>
                </div>

                {/* يمكنك وضع صورة هاتف شفاف PNG هنا لتعزيز الشكل */}
                <div className="hero-image-box">
                    {/* <img src="phone-image.png" alt="Featured Device" /> */}
                </div>
            </div>
        </div>
    );
}

export default Hero;
