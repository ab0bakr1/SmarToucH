import React, { useState } from 'react'
import "./Cart.css"
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useShoppingCart} from "../../../Context/Context"
import CartItem from "./CartItem";
import AllPhones from "../../../Data/AllPhones.json"

const Cart = () => {
  const { cartQuantity,cartItems } = useShoppingCart();
  const [Overlay, setOverlay] = useState("overlay");
  const [CartMenu , setCartMenu] = useState("Cart-menu");
  const [BuyMenu , setBuyMenu] = useState("Buy-cart");
  const Cart =() =>{
    CartMenu === "Cart-menu" ? setCartMenu("Cart-menu active") : setCartMenu("Cart-menu");
    Overlay === "overlay" ? setOverlay("overlay active") : setOverlay("overlay");
  }
  const Buy =() =>{
    Overlay === "overlay" ? setOverlay ("overlay active") : setOverlay("overlay");
    BuyMenu === "Buy-cart" ? setBuyMenu("Buy-cart active") : setBuyMenu("Buy-cart");
}
  return (
    <section>
      <div className='Cart'>
          <h4 onClick={Cart}>Cart<span className='cart-n'>{cartQuantity}</span></h4>
      </div>
      <div className={CartMenu}>
        <div className='Cart-header'>
          <FontAwesomeIcon className='fs-2' onClick={Cart} icon={faX} />
          <h3 className='m-0 fs-1'>Cart</h3>
        </div>
        <div className="Cart-body">
          {cartItems.map((item) =>(
            <CartItem key={item.id} {...item}/>
          ))}
        </div>
        <div className='Cart-footer'>
          <button type='submit' onClick={Buy} className='btn btn-primary text-capitalize'>buy now</button>
          <div className='totle'>total: <span>$
            {cartItems.reduce((total, cartItem) => {
                const item = AllPhones.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)}
            </span>
          </div>
        </div>
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
      <div onClick={Cart} className={Overlay}></div>
    </section>
    
  )
}

export default Cart