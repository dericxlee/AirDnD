import React from "react"
import './ListingProgressBar.css'

const ListingProgressBar = ({step, totalSteps, handleNext, handleBack, handleSubmit}) => {
    const stepWidth = 98 / totalSteps;

    const left = () => {
        if(step === 1){
            return (
                <div></div>
            )
        } else {
            return (
                <button className='listing-back-btn' onClick={handleBack}>Back</button>
            )
        }
    };

    const right = () => {
        if(step !== totalSteps){
            return (
                <button className='listing-next-btn' onClick={handleNext}>Next</button>
            );
        } else {
            return (
                <button className='listing-submit-btn' onClick={handleSubmit}>Save</button>
            );
        };
    }

    const items = []
    for(let i = 0; i < totalSteps; i++){
        const stepStyle = {
            width: `${stepWidth}%`,
        };

        if(i < step){
            items.push(<div key={i} className='progress-complete' style={stepStyle}></div>)
        } else {
            items.push(<div key={i} className='progress-incomplete' style={stepStyle}></div>)
        }
    }

    return (
        <div className='listing-form-bottom-overlay'>
            <div className='progress-bar-box'>
                {items}
            </div>
            <div className='listing-form-bottom-btns'>
                {left()}
                {right()}
            </div>
        </div>
    );
};

export default ListingProgressBar;