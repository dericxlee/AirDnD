import './TripForm.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const TripForm = ({listing}) => {
    const dispatch = useDispatch()
    
    const price = listing?.price.toLocaleString()
    
    const [startDate, setStartDate] = useState(new Date("2023-05-03"))
    const [closingDate, setClosingDate] = useState(new Date("2023-05-07"))
    const calcNumDays = () => {
        return (closingDate - startDate)/(1000*3600*24)
    }
    const [numDays, setNumDays] = useState(calcNumDays())
    const [nightlyFee, setNightlyFee] = useState(0)
    const [hospitalityFee, setHospitalityFee] = useState(0)
    const [netTotal, setNetTotal] = useState(0)

    useEffect(()=> {
        setNumDays(calcNumDays())
    }, [dispatch, startDate, closingDate])

    useEffect(() => {
        setNightlyFee(listing?.price * numDays)
    }, [dispatch, numDays])

    useEffect(()=> {
        setHospitalityFee(nightlyFee * 0.15)
    }, [dispatch, nightlyFee])

    useEffect(()=> {
        setNetTotal(nightlyFee + hospitalityFee)
    }, [dispatch, nightlyFee, hospitalityFee])

    // console.log((closingDate - startDate)/ (1000*3600*24))

    return (
        <div id='trip-form-container'>
            <div id='trip-form-price-container'>
                <div id='trip-form-price-box'>
                    <p id='trip-form-price'>${price}</p>
                    <p>night</p>
                </div>
            </div>
            <div id='trip-form-input-field-container'>
                <form id='trip-form'>
                    <div id='trip-form-input-field-box'>
                        <div id='trip-form-date-box'>
                            <input className='trip-form-date-input' type="date" value={startDate} onChange={e=>setStartDate(e.target.value)}/>
                            <input className='trip-form-date-input' type="date" value={closingDate} onChange={e=>setClosingDate(e.target.value)}/>
                            <input id='num-guest-input' type="number" />
                        </div>
                    </div>
                    <div id='trip-form-submit-box'>
                        <button id='trip-form-btn'>Reserve</button>
                    </div>
                </form>
            </div>
            <div id='trip-form-payment-container'>
                <div id='trip-form-payment-msg'>You won't be charged yet</div>
                <div id='trip-form-nightly-fee'>
                    <div id='trip-form-sub-calc'>${price} x {numDays} nights</div>
                    <div id='trip-form-sub-total'>{nightlyFee}</div>
                </div>
                <div id='trip-form-hospitality-fee'>
                    <div id='trip-form-sub-calc'>Hospitality fees</div>
                    <div id='trip-form-sub-total'>{hospitalityFee}</div>
                </div>
                <hr />
                <div id='trip-form-total-fee'>
                    <div id='trip-form-sub-calc'>Total before taxes</div>
                    <div id='trip-form-sub-total'>{netTotal}</div>
                </div>
            
            </div>
        </div>
    )
}

export default TripForm