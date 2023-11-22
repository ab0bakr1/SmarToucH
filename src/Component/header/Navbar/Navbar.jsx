import { faBarsStaggered, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import Login from "../Login/Login"
import Favorite from '../Favorite/Favorite';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
const Navbar = () => {
  const [Overlay, setOverlay] = useState("overlay");
  const [NavMenu , setNavMenu] = useState("nav-menu");
  const Mobail =() =>{
    Overlay === "overlay" ? setOverlay ("overlay active") : setOverlay("overlay");
    NavMenu === "nav-menu" ? setNavMenu("nav-menu active") : setNavMenu("nav-menu");
  }
  return (
    <>
      <div className='Nav-btn'>
        <FontAwesomeIcon className='fs-2' onClick={Mobail} icon={faBarsStaggered} style={{color: "#633b49",}} />
      </div>
      <nav className={NavMenu}>
        <div className='nav-header'>
          <FontAwesomeIcon className='fs-2' onClick={Mobail} icon={faX} style={{color: "rgb(55, 115, 255)",}} />
        </div>
        <div className='PX770'>
          <Login />
          <Favorite />
        </div>
        <ul className='nav-item'>
            <li><Link to="/">home</Link></li>
            <li><Link to="/Shop-All">shop</Link></li>
            <li><Link to="/about-us">about</Link></li>
            <li><Link to="/Contact-us">contact</Link></li>
        </ul>
        <div className='Nav-socail d-flex gap-5 fs-2 justify-content-center'>
          <FontAwesomeIcon icon={faFacebook} style={{color: "rgb(55, 115, 255)",}} />
          <FontAwesomeIcon icon={faInstagram} style={{color: "rgb(55, 115, 255)",}} />
          <FontAwesomeIcon icon={faXTwitter} style={{color: "rgb(55, 115, 255)",}} />
        </div>
      </nav>
      <div onClick={Mobail} className={Overlay}></div>
    </>
  )
}

export default Navbar