import { deleteListing } from "../../store/listing"
import { useDispatch } from "react-redux"
import './ListingDeleteButton.css'

const ListingDeleteButton = ({listingId}) => {
    const dispatch = useDispatch()
    
    const handleClick = e => {
        e.preventDefault()
        dispatch(deleteListing(listingId))
    }

    return (
        <button className='delete-btn' onClick={handleClick}>Delete</button>
    )
}

export default ListingDeleteButton