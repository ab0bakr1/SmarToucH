import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeartCircleCheck, faEye } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useShoppingCart } from "../../../Context/Context";
import { Link } from 'react-router-dom';
import "./NewItem.css";

const NewItem = ({id, image, company, model, price }) => {
  const { increaseCartQuantity, addToFav, deleteFav, Favorites } = useShoppingCart();
  
  const isFavorite = Favorites.some((item) => item.id === id);

  return (
    <div className='product-card-modern'>
      <div className='product-image-area'>
        <Link to={`/SinglePhones/${model}`}>
            <img src={image.one} alt={model} className="product-img" />
        </Link>
        
        {/* أزرار سريعة تظهر عند التمرير */}
        <div className='product-quick-actions'>
            <button className='action-btn cart' title="Add to Cart" onClick={() => increaseCartQuantity(id)}>
                <FontAwesomeIcon icon={faCartPlus} />
            </button>
            
            {isFavorite ? (
                <button className='action-btn fav active' title="Remove from Wishlist" onClick={() => deleteFav(id)}>
                    <FontAwesomeIcon icon={faHeartCircleCheck} />
                </button>
            ) : (
                <button className='action-btn fav' title="Add to Wishlist" onClick={() => addToFav(id)}>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
            )}

            <Link to={`/SinglePhones/${model}`} className='action-btn view' title="View Details">
                <FontAwesomeIcon icon={faEye} />
            </Link>
        </div>
      </div>

      <div className='product-info-area'>
        <span className='brand-name'>{company}</span>
        <Link className='model-link' to={`/SinglePhones/${model}`}>
            <h3 className='model-name'>{model}</h3>
        </Link>
        <div className='price-wrapper'>
            <span className='currency'>$</span>
            <span className='amount'>{price}</span>
        </div>
      </div>
    </div>
  );
}

export default NewItem;
