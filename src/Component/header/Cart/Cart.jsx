import React, { useState } from 'react';
import "./Cart.css";
import { faXmark, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useShoppingCart } from "../../../Context/Context";
import CartItem from "./CartItem";
import AllPhones from "../../../Data/AllPhones.json";

const Cart = () => {
    const { cartQuantity, cartItems } = useShoppingCart();
    const [isOpen, setIsOpen] = useState(false);

    const toggleCart = () => setIsOpen(!isOpen);

    const totalPrice = cartItems.reduce((total, cartItem) => {
        const item = AllPhones.find((i) => i.id === cartItem.id);
        return total + (item?.price || 0) * cartItem.quantity;
    }, 0);

    return (
        <section>
            {/* أيقونة السلة في النافبار */}
            <div className='cart-trigger' onClick={toggleCart}>
                <FontAwesomeIcon icon={faBagShopping} />
                {cartQuantity > 0 && <span className='cart-badge'>{cartQuantity}</span>}
            </div>

            {/* سلة التسوق الجانبية */}
            <div className={`modern-side-cart ${isOpen ? "active" : ""}`}>
                <div className='cart-header'>
                    <h3>My Cart ({cartQuantity})</h3>
                    <button className='close-cart' onClick={toggleCart}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>

                <div className="cart-items-body">
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => <CartItem key={item.id} {...item} />)
                    ) : (
                        <div className='empty-cart-msg'>
                            <FontAwesomeIcon icon={faBagShopping} className='mb-3' />
                            <p>Your cart is empty</p>
                        </div>
                    )}
                </div>

                <div className='cart-footer-summary'>
                    <div className='total-row d-flex justify-content-between mb-3'>
                        <span>Subtotal</span>
                        <span className='total-amount'>${totalPrice.toLocaleString()}</span>
                    </div>
                    <button className='checkout-btn'>
                        Checkout Now
                    </button>
                </div>
            </div>

            <div onClick={toggleCart} className={`cart-overlay ${isOpen ? "active" : ""}`}></div>
        </section>
    );
}

export default Cart;
