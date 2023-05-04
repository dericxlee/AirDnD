import React from "react";
import { useState } from "react";
import ListingForm from "../ListingForm";
import { Modal } from "../../context/Modal";

const NewListingButton = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setShowModal(true)
      }
    
    const handleClose = (e) => {
        e.preventDefault()
        setShowModal(false)
    }

    return (
        <>
          <button id='new-listing-btn' onClick={handleClick}>+ Create New Listing</button>
          {showModal && (
            <Modal onClose={handleClose}>
              <ListingForm />
            </Modal>
          )}
        </>
    );
}

export default NewListingButton