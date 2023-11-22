import { useParams } from "react-router-dom";
import { AllPhones } from "../Data/SinglePhones";
import React, { useState } from "react";
import Header from "./header/Header";
import Footer from "./Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import "./SinglePhones.css";
import {useShoppingCart} from "../Context/Context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeartCircleCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const SinglePhones = () => {
  const {increaseCartQuantity,addToFav,deleteFav,Favorites} = useShoppingCart();
 const { model } = useParams();
 const phones = AllPhones.find((p) => p.model === model);
 const [ImgColor, setImgColor] = useState("");
 const handleButtonClick = (value) => {
    setImgColor(value);
 };
 const FavChecker = (id) =>{
  const boolean = Favorites.some((item) => item.id === id);
  return boolean;
};
const [Overlay, setOverlay] = useState("overlay");
const [BuyMenu , setBuyMenu] = useState("Buy-menu");
const Buy =() =>{
  Overlay === "overlay" ? setOverlay ("overlay active") : setOverlay("overlay");
  BuyMenu === "Buy-menu" ? setBuyMenu("Buy-menu active") : setBuyMenu("Buy-menu");
}
const item = AllPhones.find((i) => i.id === phones.id);
    if (item == null) return null;

 return (
    <>
      <Header />
      <Container>
        <section className="my-5">
          <Row lg={2} className="single_phone">
            <Col className="single-image">
              {(ImgColor) ? (
              <img className="w-100 h-100" src={phones.image[ImgColor]}/>) 
              : (
              <img className="w-100 h-100" src={phones.image.one}/>)}
              <div className="single-color">
                {phones.colorimg.map((color) => (
                 <button onClick={() => handleButtonClick(color)}>
                    {color} <div className="color-btn" style={{ backgroundColor: `${color}` }}></div>
                 </button>
                ))}
              </div>
            </Col>
            <div className="single-item">
              <h2>{phones.company} {phones.model}</h2>
              <h4><span>OS:</span> {phones.OS}</h4>
              <h4><span>CAMERA:</span> {phones.CAMERA}</h4>
              <h4><span>SELFIE CAMERA:</span> {phones["SELFIE CAMERA"]}</h4>
              <h4><span>BATTERY:</span> {phones.BATTERY}</h4>
              <h4><span>MEMORY:</span> {phones.MEMORY}</h4>
              <h4><span>price:</span> ${phones.price}</h4>
              <div className="single-btns">
                <div>
                  {FavChecker(item.id) ? (
                    <button className='btn-fav' onClick={() => deleteFav(item.id)}><FontAwesomeIcon  icon={faHeartCircleCheck} className='fs-2' style={{color: "rgb(55, 115, 255)",}} /></button>)  
                    :( 
                    <button className='btn-fav' onClick={() => addToFav(item.id)}><FontAwesomeIcon  icon={faHeart} className='fs-2' style={{color: "rgb(55, 115, 255)",}} /></button>)
                  }
                </div>
                <div>
                  <button className='btn-cart' onClick={() => increaseCartQuantity(item.id)}><FontAwesomeIcon icon={faCartShopping} className='fs-2' style={{color: "rgb(55, 115, 255)",}} /></button>
                </div>
                <div className="w-100">
                  <button className="btn-buy" onClick={Buy}>buy now</button>
                </div>
                <div className={BuyMenu}>
                  <div className='Buy-header'>
                    <FontAwesomeIcon className='fs-2' onClick={Buy} icon={faX} style={{color: "rgb(55, 115, 255)",}} />
                  </div>
                  <div className='Buy-item'>
                    <h2>demo mode</h2>
                    <p className='mt-5 fs-5'>The website is still under trial and development</p>
                  </div>
                </div>
                <div onClick={Buy} className={Overlay}></div>
              </div>
            </div>
          </Row>
        </section>
      </Container>
      <Footer />
    </>
 );
};

export default SinglePhones


