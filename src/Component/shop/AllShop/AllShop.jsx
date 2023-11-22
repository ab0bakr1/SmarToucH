import React from 'react'
import Header from '../../header/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../../Footer/Footer'
import AllPhones from "../../../Data/AllPhones.json"
import AllShopItem from './AllShopItem'

const AllShop = () => {
  return (
    <>
    <Header />
    <Container>
        <section>
            <h2 className='text-center text-uppercase my-4'>shop all</h2>
            <Row className='' lg={4} md={2} sm={1} xs={1}>
                {AllPhones.map((item) =>(
                    <Col>
                        <AllShopItem {...item}/>
                    </Col>
                ))}
            </Row>
        </section>
    </Container>
    <Footer />
    </>
    
  )
}

export default AllShop