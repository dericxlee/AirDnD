import './TripForm.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { createTrip } from '../../store/trip'
import { useHistory } from 'react-router-dom'
import Errors from '../ListingCreate/Errors'

const TripForm = ({listing}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    const [reserve, setReserve] = useState('Reserve')
    const [errors, setErrors] = useState('')
    
    const addDays = (num) => {
        const today = new Date()
        today.setDate(today.getDate() + num)
        return today.toISOString().split('T')[0];
    };

    const numToIntStr = (num) => {
        const numToInt = Math.trunc(num)
        if(numToInt === NaN) return 'Calculating'
        if(numToInt > 0){
            return numToInt.toLocaleString();
        } else {
            return '0'
        }
    }
    
    const price = listing?.price.toLocaleString()
    
    const [guest, setGuest] = useState('guest')
    const [numGuests, setNumGuests] = useState(1)
    const [stringStartDate, setStringStartDate] = useState('2000-01-01')
    const [stringClosingDate, setStringClosingDate] = useState('2000-01-01')
    const [startDate, setStartDate] = useState(new Date(stringStartDate))
    const [closingDate, setClosingDate] = useState(new Date(stringClosingDate))
    
    useEffect(()=> {
        setStringStartDate(addDays(1))
        setStringClosingDate(addDays(5))
    }, [dispatch])

    useEffect(()=> {
        if(numGuests > 1){
            setGuest('guests');
        } else {
            setGuest('guest');
        }
    }, [dispatch, numGuests])

    useEffect(()=> {
        if(numGuests < 1 && numGuests !== ''){
            setTimeout(()=> {
                setNumGuests(1)
            }, 500)
        } else if (numGuests > listing?.maxGuests){
            setTimeout(()=> {
                setNumGuests(listing?.maxGuests)
            }, 500)
        }
    }, [numGuests])

    function calcNumDays() {
        const diffDays = (closingDate - startDate)/(1000*3600*24)
        return diffDays
    };

    const [numDays, setNumDays] = useState(calcNumDays())
    const [nightlyFee, setNightlyFee] = useState(0)
    const [strNightlyFee, setStrNightlyFee] = useState(nightlyFee)
    const [hospitalityFee, setHospitalityFee] = useState(0)
    const [strHospitalityFee, setStrHospitalityFee] = useState(hospitalityFee)
    const [netTotal, setNetTotal] = useState(0)
    const [strNetTotal, setStrNetTotal] = useState(netTotal)

    const trip = {
        userId: sessionUser?.id,
        listingId: listing?.id,
        startDate: stringStartDate,
        closingDate: stringClosingDate,
        numGuests: numGuests
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(!sessionUser){
            setErrors('You must be logged in to reserve')
        } else if (stringStartDate >= stringClosingDate) {
            setErrors('Date range is invalid')
        } else {
            setReserve('Reserving')
            setTimeout(()=> {
                dispatch(createTrip(trip))
                history.push('/trips')
            }, 1000)
        };
    };

    useEffect(()=> {
        setTimeout(()=> {
            setStartDate(new Date(stringStartDate))
            setClosingDate(new Date(stringClosingDate))
        }, 0)
    }, [dispatch, stringStartDate, stringClosingDate])

    useEffect(()=> {
        setTimeout(()=> {
            setNumDays(calcNumDays())
        }, 300)
    }, [dispatch, startDate, closingDate])

    useEffect(() => {
        setNightlyFee(listing?.price * numDays)
    }, [dispatch, numDays])

    useEffect(()=> {
        setHospitalityFee(nightlyFee * 0.15)
    }, [dispatch, nightlyFee])

    useEffect(()=> {
        setStrNightlyFee(numToIntStr(nightlyFee))
        setStrHospitalityFee(numToIntStr(hospitalityFee))
        setNetTotal(nightlyFee + hospitalityFee)
    }, [dispatch, nightlyFee, hospitalityFee])

    useEffect(()=> {
        setTimeout(()=> {
            setStrNetTotal(numToIntStr(netTotal))
        }, 0)
    }, [dispatch, netTotal])

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
                        <div id='trip-form-both-date-box'>
                            <div id='trip-form-date-box'>
                                <div id='trip-form-date-header'>
                                    <span>CHECK-IN</span>
                                </div>
                                <input className='trip-form-date-input' type="date" value={stringStartDate} onChange={e=>setStringStartDate(e.target.value)}/>
                            </div>
                            <div id='trip-form-date-box'>
                                <div id='trip-form-date-header'>
                                    <span>CHECKOUT</span>
                                </div>
                                <input className='trip-form-date-input' type="date" value={stringClosingDate} onChange={e=>setStringClosingDate(e.target.value)}/>
                            </div>
                        </div>
                        <div id='trip-form-guest-box'>
                            <div id='trip-form-guest-header'>
                                <span>GUESTS</span>
                            </div>
                            <input id='num-guest-input' type="number" value={numGuests} min='1' max={listing?.maxGuests} onChange={e=>setNumGuests(e.target.value)}/>
                            <label id='num-guest-overlay'>{guest}</label> 
                        </div>
                    </div>
                    <div id='trip-form-submit-box'>
                        <button id='trip-form-btn'>{reserve}</button>
                    </div>
                </form>
            </div>
            <div id='trip-form-payment-container'>
                <div id='trip-form-payment-msg'>You won't be charged yet</div>
                <div id='trip-form-error-box'>
                    <Errors errors={errors}/>
                </div>
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