import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import "./Favorite.css"
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useShoppingCart } from '../../../Context/Context';
import FavItem from './FavItem';

const Favorite = () => {
  const { FavQuantity,Favorites } = useShoppingCart();
  const [Overlay, setOverlay] = useState("overlay");
  const [FavMenu , setFavMenu] = useState("Fav-menu");
  const Fav =() =>{
    FavMenu === "Fav-menu" ? setFavMenu("Fav-menu active") : setFavMenu("Fav-menu");
    Overlay === "overlay" ? setOverlay("overlay active") : setOverlay("overlay");
  }
  return (
    <div className='Favorite'>
      <div className='Fav'>
        <FontAwesomeIcon onClick={Fav} icon={faHeart} className='fs-2' style={{color: "#478bff",}} />
        <span className='Fav-n'>{FavQuantity}</span>
      </div>
      <div className={FavMenu}>
        <div className='Fav-header'>
          <FontAwesomeIcon className='fs-2' onClick={Fav} icon={faX} />
          <h3 className='m-0 fs-1'>Favorite</h3>
        </div>
        <div className='Fav-body'>
        {Favorites.map((item) =>(
            <FavItem key={item.id} {...item}/>
          ))}
        </div>
      </div>
      <div onClick={Fav} className={Overlay}></div>
    </div>
    
  )
}

export default Favorite