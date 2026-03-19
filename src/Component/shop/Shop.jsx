import React from 'react'
import New from './New/New'
import "./Shop.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
  return (
    <section className="shop-section-wrapper">
      {/* معرض المنتجات الجديد */}
      <New />
      
      {/* منطقة زر عرض الكل */}
      <div className="shop-all-container">
        <Link to="/Shop-All" className="shop-all-link">
          <button className="modern-shop-all-btn">
            <span>Explore All Devices</span>
            <FontAwesomeIcon icon={faArrowRightLong} className="btn-arrow" />
          </button>
        </Link>
        <p className="shop-hint">Over 100+ new models waiting for you</p>
      </div>
    </section>
  )
}

export default Shop
