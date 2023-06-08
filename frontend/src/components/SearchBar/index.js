import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './SearchBar.css'

const SearchBar = () => {
    const [city, setCity] = useState('');
    const [guests, setGuests] = useState('');
    const history = useHistory();

    const handleSearch = (e) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if(city) params.append("city", city)
        if(guests) params.append("guests", guests)
        history.push(`/search?${params}`)
        setCity('')
        setGuests('')
    };

    return (

        <form className='search-bar'>
            <div className='search-city'>
                <input type="text" value={city} onChange={e=>setCity(e.target.value)} placeholder="City" />
            </div>
            <div className='search-guests'>
                <input type="number" value={guests} onChange={e=>setGuests(e.target.value)} placeholder="Add guests"/>
                <button onClick={handleSearch}>
                    <img src="https://www.clker.com/cliparts/R/6/l/K/8/R/search-icon-red-hi.png" alt="" />
                </button>
            </div>
        </form>
        
    )
};

export default SearchBar;