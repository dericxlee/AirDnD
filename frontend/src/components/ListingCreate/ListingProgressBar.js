import React from "react"
import './ListingProgressBar.css'


const ListingProgressBar = ({step, totalSteps}) => {
    const items = []
    for(let i = 0; i < totalSteps; i++){
        if(i < step){
            items.push(<div className='progress-complete'></div>)
        } else {
            items.push(<div className='progress-incomplete'></div>)
        }
    }

    return (
        <div className='progress-bar-box'>
            {items}
        </div>
    );
};

export default ListingProgressBar;