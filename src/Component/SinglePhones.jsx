import { useParams } from "react-router-dom";
import { AllPhones } from "../Data/SinglePhones";
import React, { useState } from "react";
import Header from "./header/Header";
import Footer from "./Footer/Footer";
import { Col, Container, Row, Badge } from "react-bootstrap";
import "./SinglePhones.css";
import { useShoppingCart } from "../Context/Context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeartCircleCheck, faX, faMicrochip, faBatteryFull, faCamera, faMemory } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const SinglePhones = () => {
    const { increaseCartQuantity, addToFav, deleteFav, Favorites } = useShoppingCart();
    const { model } = useParams();
    const phones = AllPhones.find((p) => p.model === model);
    const [ImgColor, setImgColor] = useState("");
    const [isBuyMenuOpen, setIsBuyMenuOpen] = useState(false);

    if (!phones) return <div className="text-center py-5">Product Not Found</div>;

    const isFavorite = Favorites.some((item) => item.id === phones.id);

    return (
        <div className="single-product-page">
            <Header />
            <Container>
                <section className="product-details-container my-5">
                    <Row className="align-items-center">
                        {/* الجانب الأيسر: عرض الصور */}
                        <Col lg={6} className="product-image-section">
                            <div className="main-img-wrapper">
                                <img 
                                    src={ImgColor ? phones.image[ImgColor] : phones.image.one} 
                                    alt={phones.model} 
                                    className="img-fluid floating-img"
                                />
                            </div>
                            <div className="color-selector-wrapper">
                                <h6>Select Color:</h6>
                                <div className="color-options">
                                    {phones.colorimg.map((color) => (
                                        <div 
                                            key={color}
                                            className={`color-circle ${ImgColor === color ? 'active' : ''}`}
                                            style={{ backgroundColor: color }}
                                            onClick={() => setImgColor(color)}
                                            title={color}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </Col>

                        {/* الجانب الأيمن: المعلومات والشراء */}
                        <Col lg={6} className="product-info-section">
                            <div className="product-header">
                                <Badge bg="primary" className="mb-2">{phones.company}</Badge>
                                <h1 className="product-title">{phones.model}</h1>
                                <h2 className="product-price">${phones.price}</h2>
                            </div>

                            <div className="specs-grid">
                                <div className="spec-card">
                                    <FontAwesomeIcon icon={faMicrochip} />
                                    <span>{phones.OS}</span>
                                </div>
                                <div className="spec-card">
                                    <FontAwesomeIcon icon={faCamera} />
                                    <span>{phones.CAMERA}</span>
                                </div>
                                <div className="spec-card">
                                    <FontAwesomeIcon icon={faMemory} />
                                    <span>{phones.MEMORY}</span>
                                </div>
                                <div className="spec-card">
                                    <FontAwesomeIcon icon={faBatteryFull} />
                                    <span>{phones.BATTERY}</span>
                                </div>
                            </div>

                            <div className="action-buttons-wrapper">
                                <button className="buy-now-btn" onClick={() => setIsBuyMenuOpen(true)}>
                                    Buy Now
                                </button>
                                <button className="icon-btn-action" onClick={() => isFavorite ? deleteFav(phones.id) : addToFav(phones.id)}>
                                    <FontAwesomeIcon icon={isFavorite ? faHeartCircleCheck : faHeart} />
                                </button>
                                <button className="icon-btn-action" onClick={() => increaseCartQuantity(phones.id)}>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </button>
                            </div>
                        </Col>
                    </Row>
                </section>
            </Container>

            {/* نافذة الشراء التجريبية */}
            {isBuyMenuOpen && (
                <>
                    <div className="modern-overlay" onClick={() => setIsBuyMenuOpen(false)}></div>
                    <div className="modern-buy-menu shadow-lg">
                        <button className="close-menu" onClick={() => setIsBuyMenuOpen(false)}>
                            <FontAwesomeIcon icon={faX} />
                        </button>
                        <div className="menu-content text-center">
                            <div className="demo-icon">🚀</div>
                            <h3>Demo Mode</h3>
                            <p>This store is currently in development. Online checkout is coming soon!</p>
                            <button className="confirm-btn" onClick={() => setIsBuyMenuOpen(false)}>Got it!</button>
                        </div>
                    </div>
                </>
            )}
            <Footer />
        </div>
    );
};

export default SinglePhones;
