import { deleteListing } from "../../store/listing"
import { useDispatch } from "react-redux"


const ListingDeleteButton = ({listingId}) => {
    const dispatch = useDispatch()
    
    const handleClick = e => {
        e.preventDefault()
        console.log(listingId)
        dispatch(deleteListing(listingId))
    }

    return (
        <button onClick={handleClick}>Delete</button>
    )
}

export default ListingDeleteButton