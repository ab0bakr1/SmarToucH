import React from 'react'
import Header from '../header/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import "./Contact.css"

const Contact = () => {
  return (
    <>
    <Header />
    <Container>
        <section className='contact'>
            <Row lg={2} className='h-100'>
                <Col lg={6} className='p-0 my-5'>
                    <div className='p-5 text-center'>
                        <h2 className='text-uppercase mb-5'>Customer Service</h2>
                        <div className='contact-customer'>
                            <h4>Tel: <span>121-111-1111</span></h4>
                            <h4>Email: <span>abobakralmashhor@gmail.com</span></h4>
                        </div>
                        <hr />
                        <h2 className='text-uppercase mb-5 mt-5'>socail media</h2>
                        <div className='contact-media'>
                            <FontAwesomeIcon icon={faFacebook} style={{color: "rgb(55, 115, 255)",}} />
                            <FontAwesomeIcon icon={faInstagram} style={{color: "rgb(55, 115, 255)",}} />
                            <FontAwesomeIcon icon={faXTwitter} style={{color: "rgb(55, 115, 255)",}} />
                        </div>
                    </div>
                </Col>
                <Col lg={6} className='p-0 my-5' style={{backgroundColor:"rgba(226, 226, 226, 0.269)"}}>
                    <div className='contact-us p-5'>
                        <h2 className='text-uppercase'>CONTACT US</h2>
                        <h5 className='text-uppercase mb-5'>WITH ANY INQUIRY</h5>
                        <form className='contact-form'>
                            <input type="text" placeholder='Your Name'/>
                            <input type="email" placeholder="Your Email Address"/>
                            <br />
                            <textarea placeholder='Type Your Message herr...' rows="8"></textarea>
                            <br />
                            <button type="submit">send message</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </section>
    </Container>
    <Footer />
    </>
  )
}

export default Contact