import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // لمعرفة الصفحة الحالية وتنشيط الرابط

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* زر القائمة الرئيسي */}
      <div className='nav-trigger-btn' onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBarsStaggered} />
      </div>

      {/* القائمة الجانبية */}
      <nav className={`modern-nav-menu ${isOpen ? "active" : ""}`}>
        <div className='nav-content-wrapper'>
          
          <div className='nav-close-header'>
            <button className='close-btn' onClick={toggleMenu}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <ul className='nav-links-list'>
            {[
              { name: 'Home', path: '/' },
              { name: 'Shop', path: '/Shop-All' },
              { name: 'About', path: '/about-us' },
              { name: 'Contact', path: '/Contact-us' }
            ].map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className={location.pathname === link.path ? "active-link" : ""}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className='nav-footer-section'>
            <div className='social-icons-row'>
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
            </div>
            <p className="nav-copyright">© 2024 Smartouch</p>
          </div>
        </div>
      </nav>

      {/* الطبقة الشفافة خلف القائمة */}
      <div onClick={toggleMenu} className={`nav-overlay ${isOpen ? "active" : ""}`}></div>
    </>
  );
}

export default Navbar;
