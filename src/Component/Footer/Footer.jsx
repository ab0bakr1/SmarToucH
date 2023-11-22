import React from 'react'
import "./Footer.css"
import { Container, Row } from 'react-bootstrap'
import { faFacebook, faInstagram, faLinkedin, faSquareFacebook, faSquareGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <Container>
            <Row className='align-items-center text-center' lg={3} sm={1} xs={1}>
                <div className='footer-link'>
                    <Link to="/about-us">About</Link><br/>
                    <Link to="//Shop-All">Shop all</Link><br/>
                    <Link to="/contact-us">Contact Us</Link><br/>
                </div>
                <div className='footer-logo'>
                    <h1><Link to="/"><span className="logo1" >Smar</span><span className="logo3">T</span><span className="logo2">oucH</span></Link></h1>
                    <div className='footer-socail d-flex gap-4 fs-4 justify-content-center'>
                        <FontAwesomeIcon icon={faFacebook} style={{color: "rgb(55, 115, 255)",}} />
                        <FontAwesomeIcon icon={faInstagram} style={{color: "rgb(55, 115, 255)",}} />
                        <FontAwesomeIcon icon={faXTwitter} style={{color: "rgb(55, 115, 255)",}} />
                    </div>
                </div>
                <div className='footer-new'>
                    <h3>Sign up for our newsletter</h3>
                    <input type="email" placeholder='Your Email'/><button>Subscribe</button>
                </div>
            </Row>
            <hr />
            <Row>
                <p className='text-center fs-4 fw-bold text-capitalize'>Copyright © 2023 - All Rights <span style={{color:"rgb(55, 115, 255)"}}>abobakr almashhor</span>.</p>
                <div className='footer-socail d-flex gap-4 fs-4 justify-content-center'>
                    <a href='https://www.linkedin.com/in/abobakr-almashhor/' target='_blank'><FontAwesomeIcon icon={faLinkedin} style={{color: "rgb(55, 115, 255)",}} /></a>
                    <a href='https://www.facebook.com/profile.php?id=100068290724398' target='_blank'><FontAwesomeIcon icon={faSquareFacebook} style={{color: "rgb(55, 115, 255)",}} /></a>
                    <a href='https://github.com/ab0bakr1' target='_blank'><FontAwesomeIcon icon={faSquareGithub} style={{color: "rgb(55, 115, 255)",}} /></a>
                </div>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer