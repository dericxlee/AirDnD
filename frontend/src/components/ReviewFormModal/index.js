import React, { useState, useEffect} from 'react';
import { Modal } from '../../context/Modal';
import ReviewForm from './ReviewForm';

const ReviewFormModal = ({trip, update, setUpdate}) => {
    const [showModal, setShowModal] = useState(false);
    const [button, setButton] = useState('')

    useEffect(()=> {
        if(trip.review) {
            setButton('Edit your Review')
        } else {
            setButton('Write a Review')
        };
    }, [trip])

    const handleOpen = () => {
        // e.preventDefault();
        setShowModal(true)
    };

    const handleClose = () => {
        // e.preventDefault();
        setShowModal(false)
        setUpdate(!update)
    };

    return (
        <>
            <button className='trip-info' id='create-review-btn' onClick={handleOpen}>{button}</button>
            {showModal && (
                <Modal onClose={handleClose}>
                    <ReviewForm trip={trip} review={trip.review} handleClose={handleClose}/>
                </Modal>
            )}
        </>
    );
}

export default ReviewFormModal;