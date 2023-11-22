import React from 'react'
import Shop from './shop/Shop'
import Excel from './Excel/Excel'
import Opinions from './Opinions/Opinions'
import Hero from './Hero/Hero'
import Header from './header/Header'
import { Container } from 'react-bootstrap'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <>
    <Header />
    <Container>
    <Hero />
    <Shop />
    <Excel />
    <Opinions />
    </Container>
    <Footer />
    </>
  )
}

export default Home