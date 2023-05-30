import React, { useState, useEffect} from 'react';
import { Modal } from '../../context/Modal';
import ReviewForm from './ReviewForm';

const ReviewFormModal = ({trip}) => {
    const [showModal, setShowModal] = useState(false);
    const [button, setButton] = useState('Write a Review')

    useEffect(()=> {
        if(trip.review) setButton('Edit your Review')
    }, [trip])

    const handleOpen = (e) => {
        e.preventDefault();
        setShowModal(true)
    };

    const handleClose = (e) => {
        e.preventDefault();
        setShowModal(false)
    };

    return (
        <>
            <button className='trip-info' id='create-review-btn' onClick={handleOpen}>{button}</button>
            {showModal && (
                <Modal onClose={handleClose}>
                    <ReviewForm trip={trip} review={trip.review}/>
                </Modal>
            )}
        </>
    );
}

export default ReviewFormModal;