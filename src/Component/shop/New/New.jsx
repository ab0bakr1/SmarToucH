import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import AllPhones from "../../../Data/AllPhones.json";
import NewItem from './NewItem';
import "./New.css";

const New = () => {
  return (
    <section className="new-arrivals-section py-5">
      <Container>
        <div className='new-section-header mb-5'>
            <span className="subtitle">Latest Collections</span>
            <h2 className="main-title">
                New <span className="t1">Smar</span><span className="t2">T</span><span className="t3">oucH</span>
            </h2>
            <div className="title-underline"></div>
        </div>

        <Row className='g-4' lg={4} md={2} sm={1} xs={1}>
            {AllPhones.slice(-8).reverse().map((item) => (
                <Col key={item.id}>
                    <NewItem {...item}/>
                </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
}

export default New;
