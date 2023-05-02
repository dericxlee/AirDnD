import './TripForm.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { createTrip } from '../../store/trip'

const TripForm = ({listing}) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

    const numToIntStr = (num) => {
        const numToInt = Math.trunc(num)
        return numToInt.toLocaleString()
    }

    
    const price = listing?.price.toLocaleString()
    const [numGuests, setNumGuests] = useState(1)
    const [stringStartDate, setStringStartDate] = useState("2023-05-03")
    const [stringClosingDate, setStringClosingDate] = useState("2023-05-08")
    const [startDate, setStartDate] = useState(new Date(stringStartDate))
    const [closingDate, setClosingDate] = useState(new Date(stringClosingDate))
    
    const calcNumDays = () => {
        return (closingDate - startDate)/(1000*3600*24)
    }
    const [numDays, setNumDays] = useState(calcNumDays())
    const [nightlyFee, setNightlyFee] = useState(0)
    const [strNightlyFee, setStrNightlyFee] = useState(nightlyFee)
    const [hospitalityFee, setHospitalityFee] = useState(0)
    const [strHospitalityFee, setStrHospitalityFee] = useState(hospitalityFee)
    const [netTotal, setNetTotal] = useState(0)
    const [strNetTotal, setStrNetTotal] = useState(netTotal)

    const trip = {
        userId: sessionUser.id,
        listingId: listing.id,
        startDate: stringStartDate,
        closingDate: stringClosingDate,
        numGuests: numGuests
    }

    console.log(trip)

    const handleSubmit = e => {
        e.preventDefault();
        // trip = {...trip}
        // trip = {...trip, userId, listingId, startDate, closingDate}
        dispatch(createTrip(trip))
    }

    useEffect(()=> {
        setTimeout(()=> {
            setStartDate(new Date(stringStartDate))
            setClosingDate(new Date(stringClosingDate))
        }, 0)
    }, [dispatch, stringStartDate, stringClosingDate])

    useEffect(()=> {
        setTimeout(()=> {
            setNumDays(calcNumDays())
        }, 1)
    }, [dispatch, startDate, closingDate])

    useEffect(() => {
        setNightlyFee(listing?.price * numDays)
    }, [dispatch, numDays])

    useEffect(()=> {
        setHospitalityFee(nightlyFee * 0.15)
    }, [dispatch, nightlyFee])

    useEffect(()=> {
        setNetTotal(nightlyFee + hospitalityFee)
        setStrNightlyFee(numToIntStr(nightlyFee))
        setStrHospitalityFee(numToIntStr(hospitalityFee))
        setStrNetTotal(numToIntStr(netTotal))
    }, [dispatch, nightlyFee, hospitalityFee])

    return (
        <div id='trip-form-container'>
            <div id='trip-form-price-container'>
                <div id='trip-form-price-box'>
                    <p id='trip-form-price'>${price}</p>
                    <p>night</p>
                </div>
            </div>
            <div id='trip-form-input-field-container'>
                <form id='trip-form' onSubmit={handleSubmit}>
                    <div id='trip-form-input-field-box'>
                        <div id='trip-form-date-box'>
                            <input className='trip-form-date-input' type="date" value={stringStartDate} onChange={e=>setStringStartDate(e.target.value)}/>
                            <input className='trip-form-date-input' type="date" value={stringClosingDate} onChange={e=>setStringClosingDate(e.target.value)}/>
                            <input id='num-guest-input' type="number" value={numGuests} min='1' max={listing?.maxGuests} onChange={e=>setNumGuests(e.target.value)}/> 
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
                    <div id='trip-form-sub-total'>${strNightlyFee}</div>
                </div>
                <div id='trip-form-hospitality-fee'>
                    <div id='trip-form-sub-calc'>Hospitality fees</div>
                    <div id='trip-form-sub-total'>${strHospitalityFee}</div>
                </div>
                <hr id='trip-form-line-break'/>
                <div id='trip-form-total-fee'>
                    <div id='trip-form-sub-calc'>Total before taxes</div>
                    <div id='trip-form-sub-total'>${strNetTotal}</div>
                </div>
            
            </div>
        </div>
    )
}

export default TripForm