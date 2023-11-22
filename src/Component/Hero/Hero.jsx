import React from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='Hero'>
      <div className='hero-title'>
        <h2 className="text-center">Welcome to the SmarToucH</h2>
        <p className="lead text-center">An online store that sells smart phones at excellent prices and services</p>
        <Link to="/Shop-All">
          <button >shop now</button>
        </Link>
      </div>
        
    </div>
  )
}

export default Hero