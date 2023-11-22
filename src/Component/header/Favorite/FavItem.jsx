import React from 'react'
import {useShoppingCart} from "../../../Context/Context"
import AllPhones from "../../../Data/AllPhones.json"
import "./FavItem.css"
import { Link } from 'react-router-dom'

const FavItem = ({ id}) => {
    const { deleteFav } = useShoppingCart();
    const item = AllPhones.find((i) => i.id === id);
    if (item == null) return null;
  return (
    <div className='d-flex gap-1 my-3 sticky'>
      <Link to={`/SinglePhones/${item.model}`} style={{width:"100px", height:"100px", minWidth:"100px"}}>
        <img className='w-100 h-100' src={item.image.one}  draggable/>
      </Link>
      <div className='w-100'>
        <Link className='text-decoration-none text-dark' to={`/SinglePhones/${item.model}`}>
          <h3 className='font fs-5 text-start'>{item.company} {item.model}</h3>
        </Link>
        <div className='d-flex justify-content-start'>
          <h3 className='font fs-5 m-0' style={{color:"rgb(55, 115, 255)"}}><b style={{color:"black"}}>Price:</b>${item.price}</h3>
        </div>
        <button className='font px-4 py-0 fs-5 w-75 btn' onClick={()=>deleteFav(id)} style={{border:"none",backgroundColor:"rgb(55, 115, 255)",color:"white",borderRadius:"20px"}}>Delete</button>
      </div>
    </div>
  )
}

export default FavItem