import React from 'react';
import { useShoppingCart } from "../../../Context/Context";
import AllPhones from "../../../Data/AllPhones.json";
import { Link } from 'react-router-dom';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
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
                    <Link to={`/SinglePhones/${item.model}`} className='item-title'>
                        {item.company} {item.model}
                    </Link>
                    <button className='remove-item-btn' onClick={() => removeFromCart(id)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>

                <p className='item-price'>${item.price}</p>

                <div className='item-controls'>
                    <div className='quantity-selector'>
                        <button onClick={() => decreaseCartQuantity(id)}><FontAwesomeIcon icon={faMinus} /></button>
                        <span>{quantity}</span>
                        <button onClick={() => increaseCartQuantity(id)}><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
