import { faCircleUser, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "./Opinions.css";

const Opinions = () => {
    // مصفوفة بسيطة للبيانات لتجنب تكرار الكود
    const reviews = [
        { id: 1, name: "Abobakr Almashhor", date: "2022/12/5", text: "Fast delivery, great quality and excellent customer service" },
        { id: 2, name: "Salh Mhamed", date: "2023/03/5", text: "Fast delivery and very professional team." },
        { id: 3, name: "Daaud Namr", date: "2020/11/11", text: "Good website, easy to use and navigate." },
        { id: 4, name: "Aaz Almashhor", date: "2022/02/5", text: "Great quality and excellent customer service" },
        // أضف البقية هنا...
    ];

    return (
        <section className='opinions-section py-5'>
            <div className="container">
                <div className="section-title-wrapper text-center mb-5">
                    <span className="subtitle">Testimonials</span>
                    <h2 className='main-title'>Our Customers' Opinion</h2>
                    <div className="title-line"></div>
                </div>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="opinions-swiper"
                >
                    {reviews.map((rev) => (
                        <SwiperSlide key={rev.id}>
                            <div className='opinion-modern-card'>
                                <div className='card-top-info'>
                                    <div className='user-meta'>
                                        <FontAwesomeIcon icon={faCircleUser} className='user-avatar-icon' />
                                        <div className="user-details">
                                            <h4>{rev.name}</h4>
                                            <span>{rev.date}</span>
                                        </div>
                                    </div>
                                    <div className="stars-rating">
                                        {[...Array(5)].map((_, i) => (
                                            <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
                                        ))}
                                    </div>
                                </div>
                                <div className='card-content'>
                                    <p>"{rev.text}"</p>
                                </div>
                                <div className="card-quote-mark">❞</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Opinions;
