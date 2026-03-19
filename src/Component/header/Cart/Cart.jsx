import React, { useState } from 'react';
import { useShoppingCart } from "../../../Context/Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import CartItem from "./CartItem";
import AllPhones from "../../../Data/AllPhones.json";
import "./Cart.css";

const Cart = () => {
    const { cartQuantity, cartItems } = useShoppingCart();
    const [isOpen, setIsOpen] = useState(false);

    const toggleCart = () => setIsOpen(!isOpen);

    const totalPrice = cartItems.reduce((total, cartItem) => {
        const item = AllPhones.find((i) => i.id === cartItem.id);
        return total + (item?.price || 0) * cartItem.quantity;
    }, 0);

    return (
        <>
            <div className='cart-trigger' onClick={toggleCart}>
                <FontAwesomeIcon icon={faBagShopping} />
                {cartQuantity > 0 && <span className='cart-badge'>{cartQuantity}</span>}
            </div>

            <aside className={`modern-cart-drawer ${isOpen ? "active" : ""}`}>
                <div className='cart-header'>
                    <h3>Your Cart <span>({cartQuantity})</span></h3>
                    <button className='close-drawer' onClick={toggleCart}><FontAwesomeIcon icon={faXmark} /></button>
                </div>

                <div className='cart-body'>
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => <CartItem key={item.id} {...item} />)
                    ) : (
                        <div className='empty-cart-msg'>Your cart is empty</div>
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className='cart-footer'>
                        <div className='total-container'>
                            <span className='label'>Estimated Total</span>
                            <span className='amount'>${totalPrice.toLocaleString()}</span>
                        </div>
                        <button className='checkout-btn'>Checkout Now</button>
                    </div>
                )}
            </aside>

            <div className={`cart-overlay ${isOpen ? "active" : ""}`} onClick={toggleCart}></div>
        </>
    );
};

export default Cart;
