import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getListings, fetchListings } from "../../store/listing"
import ListingIndexItem from "./ListingIndexItem"

const ListingIndex = () => {
    const dispatch = useDispatch()
    const listings = useSelector(getListings)

    useEffect(()=> {
        dispatch(fetchListings())
    }, [dispatch])

    return (
        <ul>
            {
                listings.map(listing => <ListingIndexItem
                    listing={listing}
                    key={listing.id}
                />)
            }
        </ul>
    )
}

export default ListingIndex;