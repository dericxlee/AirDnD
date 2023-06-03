import React from "react";
import './NumberInput.css'

const NumberInput = ({input, setInput}) => {
    const minusButton = document.getElementById('minus-input-button')

    const handleAdd = () => {
        setInput(input + 1)
    }

    const handleSubtract = () => {
        setInput(input - 1)
    }

    return (
        <div className='number-input-box'>
            <div className='number-input-btn-box'>
                <button className='input-button' disabled={input <= 1} onClick={handleSubtract}>-</button>
            </div>
            <div className='number-input-display-box'>
                {input} 
            </div>
            <div className='number-input-btn-box'>
                <button className='input-button' onClick={handleAdd}>+</button>
            </div>
        </div>
    )
}

export default NumberInput;