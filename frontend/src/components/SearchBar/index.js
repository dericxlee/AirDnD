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
    };

    return (
        <form className="search-bar">
            <input type="text" value={city} onChange={e=>setCity(e.target.value)} />
            <input type="text" value={guests} onChange={e=>setGuests(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
        </form>
    )
};

export default SearchBar;