import { faCartShopping, faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import {useShoppingCart} from "../../../Context/Context"
import { Link } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const AllShopItem = ({id,image,company,model,price }) => {
  const { Favorites,increaseCartQuantity,deleteFav,addToFav } = useShoppingCart();
  const FavChecker = (id) =>{
    const boolean = Favorites.some((item) => item.id === id);
    return boolean;
  };
  return (
    <div className='NewItem text-center'>
      <Link className='text-decoration-none' to={`/SinglePhones/${id}`}>
        <img src={image.one}  />
        <h4>{company}</h4>
        <h3>{model}</h3>
        <p>${price}</p>
      </Link>
      <div className='NewItem-slid'>
          <div className='NewItem-menu'>
              <button className='slid-cart' onClick={() => increaseCartQuantity(id)}><FontAwesomeIcon icon={faCartShopping} className='fs-2' style={{color: "rgb(55, 115, 255)",}} /></button>
              {FavChecker(id) ? (
              <button className='slid-fav' onClick={() => deleteFav(id)}><FontAwesomeIcon  icon={faHeartCircleCheck} className='fs-2' style={{color: "rgb(55, 115, 255)",}} /></button>
              ):( 
              <button className='slid-fav' onClick={() => addToFav(id)}><FontAwesomeIcon  icon={faHeart} className='fs-2' style={{color: "rgb(55, 115, 255)",}} /></button>
              )}
          </div>
          
      </div>
    </div>
  )
}

export default AllShopItem