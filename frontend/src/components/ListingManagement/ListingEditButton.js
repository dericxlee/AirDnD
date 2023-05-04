import React from "react";
import { useState } from "react";
import ListingForm from "../ListingForm";
import { Modal } from "../../context/Modal";
import './ListingEditButton.css'

const ListingEditButton = ({listing}) => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setShowModal(true)
      }
    
    const handleClose = (e) => {
        e.preventDefault()
        setShowModal(false)
    }

    // console.log(listing, 'btn')

    return (
        <>
          <button id='edit-listing-btn' onClick={handleClick}>Edit</button>
          {showModal && (
            <Modal onClose={handleClose}>
              <ListingForm listing={listing}/>
            </Modal>
          )}
        </>
    );
}

export default ListingEditButton;