import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getListings, fetchListings } from "../../store/listing"
import ListingIndexItem from "./ListingIndexItem"
import './ListingIndex.css'

const ListingIndex = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const listings = useSelector(getListings)
    let filterListings = listings

    if(sessionUser){
        filterListings = Object.values(listings).filter(l => l.hostId !== sessionUser.id)
    }

    useEffect(()=> {
        dispatch(fetchListings())
    }, [dispatch])

    return (
        <ul id='listing-box-container'>
            {
                filterListings.map(listing => <ListingIndexItem
                    listing={listing}
                    key={listing.id}
                />)
            }
        </ul>
    )
}

export default ListingIndex;