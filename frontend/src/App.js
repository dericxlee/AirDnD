import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/index.js';
import ListingIndex from './components/ListingIndex/index.js';
import ListingShow from './components/ListingShow/index.js';
import ListingForm from './components/ListingForm/index.js';
import ListingManagement from './components/ListingManagement/index.js';
import { useDispatch } from 'react-redux';
import TripIndex from './components/TripIndex/index.js';


function App() {

  return (
    <>
      <div>
        <Navigation/>
      </div>
      <Switch>
        <Route exact path='/trips' component={TripIndex}/>
        <Route exact path ='/client' component={ListingManagement}/>
        <Route exact path='/' component={ListingIndex}/>
        <Route path='/listings/:listingId/' component={ListingShow}/>
      </Switch>
    </>
  );
}

export default App;
