import React from "react"

const ListingPhotos = () => {
    const files = []

    const handleFile = (e) => {
        files.push(e.target.files)
        console.log(files)
    };

    return (
        <div>
            <input type="file" onDrop={handleFile} />
        </div>
    )
}

export default ListingPhotos;