import React, { useState } from 'react'
import "./Search.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import AllPhones from "../../../Data/AllPhones.json"
import { Link } from 'react-router-dom'

const Search = () => {
 const [Search,setSearch] = useState('');
  
 return (
    <section>
      <div className='search'>
        <input className='search-input' type="search" name="search" placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "rgb(55, 115, 255)",}} />
      </div>
      <div className='search-item'>
        {Search.trim() === "" ? null :
        AllPhones.filter((item) =>{
            return Search.toLowerCase() === '' ? item : item.model.toLowerCase().includes(Search) || item.company.toLowerCase().includes(Search);})
        .slice(-4).map((item) =>(
        <Link className='text-decoration-none search-card' to={`/SinglePhones/${item.model}`} key={item.id}>
            <img src={item.image.one} />
            <div>
              <h5 className='search-name'>{item.company} {item.model}</h5>
              <p style={{color: "rgb(55, 115, 255)",}} className='fs-5 ms-2'>${item.price}</p>
            </div>

        </Link>
        ))}
      </div>
    </section> 
 )
}

export default Search