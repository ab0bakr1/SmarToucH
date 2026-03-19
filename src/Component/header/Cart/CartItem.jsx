import React from 'react';
import { useShoppingCart } from "../../../Context/Context";
import AllPhones from "../../../Data/AllPhones.json";
import { Link } from 'react-router-dom';
import { faPlus, faMinus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./CartItem.css";

const CartItem = ({ id, quantity }) => {
    const { decreaseCartQuantity, increaseCartQuantity, removeFromCart } = useShoppingCart();
    const item = AllPhones.find((i) => i.id === id);
    if (item == null) return null;

    return (
        <div className='modern-cart-item'>
            <div className='item-image-container'>
                <img src={item.image.one} alt={item.model} />
            </div>
            
            <div className='item-details'>
                <div className='d-flex justify-content-between align-items-start'>
                    <Link className='item-title' to={`/SinglePhones/${item.model}`}>
                        <h6>{item.company}</h6>
                        <h5>{item.model}</h5>
                    </Link>
                    <button className='remove-item-btn' onClick={() => removeFromCart(id)}>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                </div>

                <div className='item-meta d-flex justify-content-between align-items-center mt-3'>
                    <div className='price-tag'>${item.price}</div>
                    
                    <div className='quantity-controller'>
                        <button onClick={() => decreaseCartQuantity(id)}><FontAwesomeIcon icon={faMinus} /></button>
                        <span>{quantity}</span>
                        <button onClick={() => increaseCartQuantity(id)}><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
