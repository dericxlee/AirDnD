import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from "./components/SignupModal/SignupForm.js";
import Navigation from './components/Navigation/index.js';
import ListingIndex from './components/ListingIndex/index.js';

function App() {
  return (
    <>
      <div>
        <Navigation/>
      </div>
      <div>
        <ListingIndex/>
      </div>
    </>
  );
}

export default App;
