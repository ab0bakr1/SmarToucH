import React from 'react'
import {useShoppingCart} from "../../../Context/Context"
import AllPhones from "../../../Data/AllPhones.json"
import "./CartItem.css"
import { Link } from 'react-router-dom'


const CartItem = ({ id, quantity}) => {
    const { decreaseCartQuantity,increaseCartQuantity } = useShoppingCart();
    const item = AllPhones.find((i) => i.id === id);
    if (item == null) return null;
  return (
    <div className='d-flex gap-1 my-3 sticky' >
      <Link style={{width:"100px", height:"100px",minWidth:"100px"}} to={`/SinglePhones/${item.model}`}>
        <img className='w-100 h-100' src={item.image.one}  draggable/>
      </Link>
      <div className='w-100'>
        <Link className='text-decoration-none text-dark' to={`/SinglePhones/${item.model}`}>
          <h3 className='font2 text-start'>{item.company} {item.model}</h3>
        </Link>
        <div className='Cart-flex'>
          <h4 className='font2' style={{color:"rgb(55, 115, 255)"}}><b style={{color:"black"}}>Price:</b>${item.price}</h4>
          <select className='font2' style={{width:"150px",border:"none",marginBottom:"8px"}} name="color">
            <option value="color" hidden>Color</option>
            {Object.assign(item.color).map((color)=>(<option value={color}>{color}</option>))}
          </select>
        </div>
        <div className='font2 d-flex justify-content-center'>
          <div className='gap-4 d-flex' style={{border:"1px solid black"}}>
            <button className='h-100' onClick={() => increaseCartQuantity(id)} style={{width:"30px",height:"30px",border:"none", backgroundColor:"transparent"}}>+</button>
            <span>{quantity}</span>
            <button className='h-100' onClick={() => decreaseCartQuantity(id)} style={{width:"30px",height:"30px",border:"none",backgroundColor:"transparent"}}>-</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default CartItem