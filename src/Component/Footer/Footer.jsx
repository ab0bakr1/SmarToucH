import React from 'react'
import "./Footer.css"
import { Container, Row, Col } from 'react-bootstrap'
import { faFacebook, faInstagram, faLinkedin, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='main-footer'>
            <Container>
                <Row className='py-5 gy-4'>
                    {/* عمود الروابط السريعة */}
                    <Col lg={4} md={6} className='text-center text-md-start'>
                        <h5 className='footer-title'>Quick Exploration</h5>
                        <ul className='footer-links-list p-0'>
                            <li><Link to="/about-us">Our Story</Link></li>
                            <li><Link to="/Shop-All">Store All Phones</Link></li>
                            <li><Link to="/contact-us">Support Center</Link></li>
                            <li><Link to="/favorites">My Favorites</Link></li>
                        </ul>
                    </Col>

                    {/* عمود اللوجو والسوشيال */}
                    <Col lg={4} md={6} className='text-center order-first order-lg-0'>
                        <div className='footer-brand'>
                            <Link to="/" className="footer-logo">
                                <span className="logo-part1">Smar</span><span className="logo-part2">T</span><span className="logo-part3">oucH</span>
                            </Link>
                            <p className="footer-tagline">Premium Experience in every touch.</p>
                            <div className='social-pills d-flex gap-3 justify-content-center mt-4'>
                                <a href="#fb" className="social-pill"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="#ig" className="social-pill"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="#x" className="social-pill"><FontAwesomeIcon icon={faXTwitter} /></a>
                            </div>
                        </div>
                    </Col>

                    {/* عمود النيوزليتر */}
                    <Col lg={4} md={12} className='text-center text-md-end'>
                        <h5 className='footer-title'>Stay Updated</h5>
                        <p className="text-muted small">Get the latest tech deals & news.</p>
                        <div className='newsletter-box'>
                            <input type="email" placeholder='Enter your email' />
                            <button>Join</button>
                        </div>
                    </Col>
                </Row>

                <hr className="footer-divider" />

                <Row className='pb-4 align-items-center'>
                    <Col md={6} className="text-center text-md-start">
                        <p className='copyright-text'>
                            Copyright © 2026 - Crafted by <span className="dev-name">Abobakr Almashhor</span>
                        </p>
                    </Col>
                    <Col md={6} className="text-center text-md-end">
                        <div className='dev-socials d-flex gap-3 justify-content-center justify-content-md-end'>
                            <a href='https://www.linkedin.com/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href='https://github.com/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
