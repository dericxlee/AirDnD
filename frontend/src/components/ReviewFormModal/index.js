import React, {useState} from 'react';
import { Modal } from '../../context/Modal';
import ReviewForm from './ReviewForm';

const ReviewFormModal = ({trip}) => {
    const [showModal, setShowModal] = useState(false);

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
            <button className='trip-info' id='create-review-btn' onClick={handleOpen}>Write a Review</button>
            {showModal && (
                <Modal onClose={handleClose}>
                    <ReviewForm trip={trip}/>
                </Modal>
            )}
        </>
    );
}

export default ReviewFormModal;