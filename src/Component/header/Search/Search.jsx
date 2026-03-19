import React, { useState, useRef, useEffect } from 'react';
import "./Search.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import AllPhones from "../../../Data/AllPhones.json";
import { Link } from 'react-router-dom';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const searchRef = useRef(null);

    // إغلاق النتائج عند الضغط خارج المكون
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsFocused(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const filteredItems = AllPhones.filter((item) => {
        const value = searchTerm.toLowerCase();
        return value !== '' && (
            item.model.toLowerCase().includes(value) || 
            item.company.toLowerCase().includes(value)
        );
    }).slice(0, 5); // عرض أول 5 نتائج فقط لجمالية التصميم

    return (
        <section className="search-section" ref={searchRef}>
            <div className={`search-box ${isFocused ? 'expanded' : ''}`}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                <input 
                    className='search-input' 
                    type="text" 
                    placeholder='Search devices...' 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                />
                {searchTerm && (
                    <FontAwesomeIcon 
                        icon={faXmark} 
                        className="clear-icon" 
                        onClick={() => setSearchTerm('')} 
                    />
                )}
            </div>

            {/* قائمة النتائج الذكية */}
            {filteredItems.length > 0 && isFocused && (
                <div className='search-results-floating'>
                    <p className="results-label">Top Results</p>
                    {filteredItems.map((item) => (
                        <Link 
                            className='search-result-card' 
                            to={`/SinglePhones/${item.model}`} 
                            key={item.id}
                            onClick={() => {setIsFocused(false); setSearchTerm('');}}
                        >
                            <div className="res-img-hold">
                                <img src={item.image.one} alt={item.model} />
                            </div>
                            <div className="res-info">
                                <h6 className='res-name'>{item.company} {item.model}</h6>
                                <span className='res-price'>${item.price}</span>
                            </div>
                        </Link>
                    ))}
                    <div className="search-footer-hint">Press Enter to see all results</div>
                </div>
            )}
        </section>
    );
}

export default Search;
