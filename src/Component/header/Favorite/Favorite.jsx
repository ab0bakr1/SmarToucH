import React, { useState } from 'react';
import "./Favorite.css";
import { faXmark, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useShoppingCart } from '../../../Context/Context';
import FavItem from './FavItem';

const Favorite = () => {
  const { FavQuantity, Favorites } = useShoppingCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleFav = () => setIsOpen(!isOpen);

  return (
    <div className='favorite-component'>
      <div className='fav-trigger' onClick={toggleFav}>
        <FontAwesomeIcon icon={FavQuantity > 0 ? faHeartSolid : faHeartRegular} 
          className={FavQuantity > 0 ? "active-heart" : ""} 
        />
        {FavQuantity > 0 && <span className='fav-badge'>{FavQuantity}</span>}
      </div>

      <div className={`modern-fav-menu ${isOpen ? "active" : ""}`}>
        <div className='fav-menu-header'>
          <h3>Favorites</h3>
          <button className='close-fav' onClick={toggleFav}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className='fav-menu-body'>
          {Favorites.length > 0 ? (
            Favorites.map((item) => <FavItem key={item.id} {...item} />)
          ) : (
            <div className='empty-fav-state'>
              <FontAwesomeIcon icon={faHeartRegular} size="3x" />
              <p>Your wishlist is empty</p>
              <button onClick={toggleFav} className="start-shopping-btn">Explore Phones</button>
            </div>
          )}
        </div>
      </div>

      <div onClick={toggleFav} className={`fav-overlay ${isOpen ? "active" : ""}`}></div>
    </div>
  );
}

export default Favorite;
