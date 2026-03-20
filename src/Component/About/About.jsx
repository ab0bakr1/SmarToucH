import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import "./About.css"

const About = () => {
    return (
        <div className="about-page-wrapper">
            <Header />
            <Container className="py-5">
                <section className='about-section-modern'>
                    <Row className='g-0 align-items-stretch shadow-lg rounded-overflow'>
                        {/* قسم الصورة مع تأثير التغطية */}
                        <Col lg={6} className='p-0 position-relative image-column'>
                            <div className="about-image-container">
                                <img 
                                    className='about-hero-img' 
                                    src="https://www.androidauthority.com/wp-content/uploads/2021/12/Best-Smartphones-2-End-of-Year-2021.jpg" 
                                    alt="SmarToucH Team" 
                                />
                                <div className="image-overlay-gradient"></div>
                            </div>
                        </Col>

                        {/* قسم النص بتنسيق عصري */}
                        <Col lg={6} className='p-0 text-column d-flex align-items-center'>
                            <div className='about-content-box'>
                                <span className="brand-label">Since 2014</span>
                                <h2 className="about-main-title">About <span className="accent-color">SmarToucH</span></h2>
                                <div className="content-divider"></div>
                                
                                <div className="paragraphs-wrapper">
                                    <p className="lead-para">Welcome to <strong>SmarToucH</strong>, your premier destination for the latest in mobile technology. We bridge the gap between innovation and affordability.</p>
                                    
                                    <p>We are a team of passionate phone enthusiasts with over <strong>10 years</strong> of experience. We don't just sell phones; we provide the tools that connect you to the world.</p>
                                    
                                    <p>At SmarToucH, we value <strong>Quality, Service, and Trust</strong>. We partner exclusively with global leaders like Apple, Samsung, and Xiaomi to ensure every device we ship is 100% genuine and backed by a full warranty.</p>
                                </div>

                                <div className="about-stats d-flex gap-4 mt-4">
                                    <div className="stat-item">
                                        <span className="stat-num">10+</span>
                                        <span className="stat-label">Years Exp.</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-num">50k+</span>
                                        <span className="stat-label">Happy Clients</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
            </Container>
            <Footer />
        </div>
    )
}

export default About
