import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "./Opinions.css"

import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
const Opinions = () => {
  return (
    <section className='my-5 Opinions'>
      <h2 className='text-center text-capitalize mb-2'>Our customers' opinion</h2>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@1.00': {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          '@2.00': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        >
            <SwiperSlide>
              <div className='Opinions-card'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex'>
                    <FontAwesomeIcon className='fs-2 me-2' icon={faCircleUser} style={{color: "rgb(55, 115, 255)",}} />
                    <h4 className='m-0'>abobakr almashhor</h4>
                  </div>
                  <p className='m-0'>2022/12/5</p>
                </div>
                <h5 className='mt-3 fs-5'>Fast delivery, great quality and excellent customer service</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='Opinions-card'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex'>
                    <FontAwesomeIcon className='fs-2 me-2' icon={faCircleUser} style={{color: "rgb(55, 115, 255)",}} />
                    <h4 className='m-0'>salh mhamed</h4>
                  </div>
                  <p className='m-0'>2023/03/5</p>
                </div>
                <h5 className='mt-3 fs-5'>Fast delivery</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='Opinions-card'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex'>
                    <FontAwesomeIcon className='fs-2 me-2' icon={faCircleUser} style={{color: "rgb(55, 115, 255)",}} />
                    <h4 className='m-0'>daaud namr</h4>
                  </div>
                  <p className='m-0'>2020/11/11</p>
                </div>
                <h5 className='mt-3 fs-5'>good website</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='Opinions-card'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex'>
                    <FontAwesomeIcon className='fs-2 me-2' icon={faCircleUser} style={{color: "rgb(55, 115, 255)",}} />
                    <h4 className='m-0'>aaz almashhor</h4>
                  </div>
                  <p className='m-0'>2022/02/5</p>
                </div>
                <h5 className='mt-3 fs-5'>Fast delivery, great quality and excellent customer service</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='Opinions-card'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex'>
                    <FontAwesomeIcon className='fs-2 me-2' icon={faCircleUser} style={{color: "rgb(55, 115, 255)",}} />
                    <h4 className='m-0'>khald bder</h4>
                  </div>
                  <p className='m-0'>2023/01/22</p>
                </div>
                <h5 className='mt-3 fs-5'>Fast delivery and excellent customer service</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='Opinions-card'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex'>
                    <FontAwesomeIcon className='fs-2 me-2' icon={faCircleUser} style={{color: "rgb(55, 115, 255)",}} />
                    <h4 className='m-0'>ahmed sdeiq</h4>
                  </div>
                  <p className='m-0'>2022/6/25</p>
                </div>
                <h5 className='mt-3 fs-5'>great quality and excellent customer service</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='Opinions-card'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex'>
                    <FontAwesomeIcon className='fs-2 me-2' icon={faCircleUser} style={{color: "rgb(55, 115, 255)",}} />
                    <h4 className='m-0'>taha ali</h4>
                  </div>
                  <p className='m-0'>2022/12/5</p>
                </div>
                <h5 className='mt-3 fs-5'>Fast delivery, great quality and excellent customer service</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='Opinions-card'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex'>
                    <FontAwesomeIcon className='fs-2 me-2' icon={faCircleUser} style={{color: "rgb(55, 115, 255)",}} />
                    <h4 className='m-0'>alwi nassr</h4>
                  </div>
                  <p className='m-0'>2022/1/15</p>
                </div>
                <h5 className='mt-3 fs-5'>Fast delivery nice</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='Opinions-card'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex'>
                    <FontAwesomeIcon className='fs-2 me-2' icon={faCircleUser} style={{color: "rgb(55, 115, 255)",}} />
                    <h4 className='m-0'>nadir haidr</h4>
                  </div>
                  <p className='m-0'>2023/06/21</p>
                </div>
                <h5 className='mt-3 fs-5'>Fast delivery, great quality</h5>
              </div>
            </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default Opinions