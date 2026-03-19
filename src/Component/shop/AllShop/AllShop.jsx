import React from 'react'
import Header from '../../header/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../../Footer/Footer'
import AllPhones from "../../../Data/AllPhones.json"
import AllShopItem from './AllShopItem'
import "./AllShop.css"

const AllShop = () => {
  return (
    <div className="all-shop-page">
      <Header />
      
      {/* هيدر الصفحة العلوي */}
      <div className="shop-page-banner">
        <Container>
           <h1 className='shop-page-title'>Explore Our Collection</h1>
           <p className='shop-page-subtitle'>Find the perfect smartphone for your lifestyle</p>
        </Container>
      </div>

      <Container className="my-5">
        <section className="all-products-grid">
            <Row className='g-4' lg={4} md={3} sm={2} xs={1}>
                {AllPhones.map((item) => (
                    <Col key={item.id} className="d-flex align-items-stretch">
                        <AllShopItem {...item}/>
                    </Col>
                ))}
            </Row>
        </section>
      </Container>
      
      <Footer />
    </div>
  )
}

export default AllShop
