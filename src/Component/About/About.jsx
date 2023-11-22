import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import "./About.css"

const About = () => {
  return (
    <>
    <Header />
    <Container>
        <section className='about'>
            <Row lg={2} className='h-100'>
                <Col lg={6} className='p-0 my-5'>
                    <img className='w-100 h-100' src="https://www.androidauthority.com/wp-content/uploads/2021/12/Best-Smartphones-2-End-of-Year-2021.jpg" alt="" />
                </Col>
                <Col lg={6} className='p-0 my-5' style={{backgroundColor:"rgb(77, 77, 77)"}}>
                    <div className='about-title'>
                        <h2 className="text-center">About us</h2>
                        <p>Welcome to SmarToucH, the online store where you can find the best deals on smart phones from the top brands. Whether you are looking for a new phone,or a refurbished phone, we have it all at SmarToucH. </p>
                        <p>We are a team of passionate and experienced phone enthusiasts who want to share our love for smart phones with you. We have been in the phone business for over 10 years, and we know what customers want and need. We are always on the lookout for the latest trends and innovations in the phone industry, and we bring them to you at the best prices.</p>
                        <p>At SmarToucH, we value quality, service, and customer satisfaction. That is why we only sell genuine and original products from trusted and reputable brands, such as Samsung, Apple, Huawei, Xiaomi, and Oppo. We also offer free shipping, easy returns, and secure payment options for your convenience. And if you have any questions or concerns, our friendly and knowledgeable customer support team is always ready to assist you.</p>
                    </div>
                    
                </Col>
            </Row>
        </section>
    </Container>
    <Footer />
    </>
  )
}

export default About