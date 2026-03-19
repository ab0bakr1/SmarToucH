import React from 'react';
import "./Hero.css";
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='full-width-hero'>
            {/* طبقة تظليل سوداء فوق الصورة لتحسين وضوح النص */}
            <div className="hero-overlay-dark"></div>

            <div className='hero-content-centered'>
                <div className='hero-text-animate-wrapper'>
                    <span className="hero-welcome-badge">Welcome to</span>
                    <h1 className="hero-brand-title">
                        Smar<span className="text-highlight-T">T</span>oucH
                    </h1>
                    <p className="hero-lead-subtitle">
                        An online store that sells smart phones at excellent prices and services
                    </p>
                    
                    <div className="hero-action-area">
                        <Link to="/Shop-All">
                            <button className="hero-modern-shop-btn">shop now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
