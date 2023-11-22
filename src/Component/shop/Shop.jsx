import React from 'react'
import New from './New/New'
import "./Shop.css"
import { Link } from 'react-router-dom'

const Shop = () => {
  return (
    <>
    <New />
    <div className="btn-ShopAll">
      <Link to="/Shop-All">
        <button>Shop All</button>
    </Link>
    </div>
    
    </>
  )
}

export default Shop