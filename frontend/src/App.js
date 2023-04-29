import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/index.js';
import ListingIndex from './components/ListingIndex/index.js';
import ListingShow from './components/ListingShow/index.js';
import ListingForm from './components/ListingForm/index.js';
import ListingManagement from './components/ListingManagement/index.js';

function App() {
  return (
    <>
      <div>
        <Navigation/>
      </div>
      <Switch>
        <Route exact path ='/listings/my' component={ListingManagement}></Route>
        <Route exact path='/' component={ListingIndex}/>
        <Route exact path='/listings/new' component={ListingForm}></Route>
        <Route path='/listings/:listingId' component={ListingShow}/>
      </Switch>
    </>
  );
}

export default App;
