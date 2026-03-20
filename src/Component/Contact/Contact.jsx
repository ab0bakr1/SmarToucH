import React from 'react'
import Header from '../header/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhoneVolume, faHeadset } from '@fortawesome/free-solid-svg-icons'
import "./Contact.css"

const Contact = () => {
    return (
        <div className="contact-page-wrapper">
            <Header />
            <Container className="py-5">
                <section className='contact-main-section shadow-sm'>
                    <Row className='g-0'>
                        {/* الجانب الأيسر: معلومات الاتصال */}
                        <Col lg={5} className='contact-info-panel p-5'>
                            <div className='info-header mb-5'>
                                <FontAwesomeIcon icon={faHeadset} className="support-icon mb-3" />
                                <h2 className='text-uppercase fw-bold'>Customer Support</h2>
                                <p>We're here to help you 24/7</p>
                            </div>
                            
                            <div className='contact-details-list'>
                                <div className="detail-item mb-4">
                                    <FontAwesomeIcon icon={faPhoneVolume} className="detail-icon" />
                                    <div>
                                        <h5>Call Us</h5>
                                        <p>121-111-1111</p>
                                    </div>
                                </div>
                                <div className="detail-item mb-4">
                                    <FontAwesomeIcon icon={faEnvelope} className="detail-icon" />
                                    <div>
                                        <h5>Email Us</h5>
                                        <p>support@smartouch.com</p>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-5 opacity-25" />

                            <div className='social-connect'>
                                <h5 className='mb-4 text-uppercase tracking-wider'>Follow Our Tech</h5>
                                <div className='social-icons-group'>
                                    <a href="#fb"><FontAwesomeIcon icon={faFacebook} /></a>
                                    <a href="#ig"><FontAwesomeIcon icon={faInstagram} /></a>
                                    <a href="#x"><FontAwesomeIcon icon={faXTwitter} /></a>
                                </div>
                            </div>
                        </Col>

                        {/* الجانب الأيمن: نموذج المراسلة */}
                        <Col lg={7} className='contact-form-panel p-5'>
                            <div className='form-header mb-5 text-center text-lg-start'>
                                <h2 className='text-uppercase fw-bold'>Get In Touch</h2>
                                <p className='text-muted'>Have a question? Send us a message and we'll respond within 2 hours.</p>
                            </div>

                            <form className='modern-contact-form'>
                                <Row>
                                    <Col md={6}>
                                        <div className="input-group-custom">
                                            <input type="text" required />
                                            <label>Full Name</label>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="input-group-custom">
                                            <input type="email" required />
                                            <label>Email Address</label>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="input-group-custom mt-4">
                                    <textarea rows="5" required></textarea>
                                    <label>Your Message</label>
                                </div>
                                <div className='text-center text-lg-end mt-4'>
                                    <button type="submit" className="send-btn-modern">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </section>
            </Container>
            <Footer />
        </div>
    )
}

export default Contact
