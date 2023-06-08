import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import './NoTripsBanner.css'

const NoTripsBanner = () => {

    return (
        <div className='no-trips-banner'>
            <div className='no-trips-msg'>
                <div className='no-trips-banner-header'>No trips booked...yet!</div>
                <div className='no-trips-banner-subheader'>Time to dust off your bags and start planning your next adventure</div>
                <NavLink to='/'>
                    <button id='start-search'>Start searching</button>
                </NavLink>
            </div>
            <div className='no-trips-img'>
                <img src="https://a0.muscache.com/im/pictures/d727f355-3f10-44b5-9750-d1efca2438fc.jpg?im_w=1920" alt="" />
            </div>
        </div>
    )
};

export default NoTripsBanner;