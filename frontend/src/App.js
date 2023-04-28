import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from "./components/SignupModal/SignupForm.js";
import Navigation from './components/Navigation/index.js';
import ListingIndex from './components/ListingIndex/index.js';
import ListingShow from './components/ListingShow/index.js';

function App() {
  return (
    <>
      <div>
        <Navigation/>
      </div>
      <Switch>
        <Route exact path='/' component={ListingIndex}/>
        <Route path='/listings/:listingId' component={ListingShow}/>
      </Switch>
    </>
  );
}

export default App;
