import { faShieldHalved, faTruckFast, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import "./Excel.css"

const Excel = () => {
    return (
        <section className='features-section py-5'>
            <Container>
                <Row className='g-4 justify-content-center text-center'>
                    {/* الميزة الأولى */}
                    <Col lg={4} md={6}>
                        <div className='feature-modern-card'>
                            <div className='feature-icon-wrapper'>
                                <FontAwesomeIcon icon={faShieldHalved} />
                            </div>
                            <div className='feature-text'>
                                <h5>Secure Payment</h5>
                                <p>100% safe payment processing</p>
                            </div>
                        </div>
                    </Col>

                    {/* الميزة الثانية */}
                    <Col lg={4} md={6}>
                        <div className='feature-modern-card'>
                            <div className='feature-icon-wrapper'>
                                <FontAwesomeIcon icon={faTruckFast} />
                            </div>
                            <div className='feature-text'>
                                <h5>Fast Delivery</h5>
                                <p>Shipping to your door in 24h</p>
                            </div>
                        </div>
                    </Col>

                    {/* الميزة الثالثة */}
                    <Col lg={4} md={6}>
                        <div className='feature-modern-card'>
                            <div className='feature-icon-wrapper'>
                                <FontAwesomeIcon icon={faCircleCheck} />
                            </div>
                            <div className='feature-text'>
                                <h5>Original Products</h5>
                                <p>Guaranteed 2-year warranty</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Excel
