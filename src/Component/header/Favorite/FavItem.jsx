import React from 'react';
import { useShoppingCart } from "../../../Context/Context";
import AllPhones from "../../../Data/AllPhones.json";
import { Link } from 'react-router-dom';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./FavItem.css";

const FavItem = ({ id }) => {
    const { deleteFav } = useShoppingCart();
    const item = AllPhones.find((i) => i.id === id);
    if (item == null) return null;

    return (
        <div className='modern-fav-item'>
            <div className='fav-img-wrapper'>
                <img src={item.image.one} alt={item.model} />
            </div>
            
            <div className='fav-info'>
                <div className='fav-text-content'>
                    <Link to={`/SinglePhones/${item.model}`} className='fav-link'>
                        <span className='brand-label'>{item.company}</span>
                        <h5 className='model-name'>{item.model}</h5>
                    </Link>
                    <div className='fav-price'>${item.price}</div>
                </div>
                
                <button className='fav-remove-action' onClick={() => deleteFav(id)} title="Remove">
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </div>
        </div>
    );
}

export default FavItem;
