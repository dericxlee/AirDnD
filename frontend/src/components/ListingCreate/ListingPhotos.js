import React, { useState } from "react"
import './ListingPhotos.css'
import { useEffect } from "react";

const ListingPhotos = () => {
    const [files, setFiles] = useState([]);

    const handleFile = (e) => {
        const selectedFiles = Array.from(e.target.files)
        setFiles([...files, ...selectedFiles])
    };

    useEffect(()=> {
        console.log(files)
    }, [files])

    return (
        <div className='listing-create-page'>
            <div className='listing-photos-container'>
                <input type="file" onDrop={handleFile} onChange={handleFile} multiple/>
            </div>
        </div>
    )
}

export default ListingPhotos;