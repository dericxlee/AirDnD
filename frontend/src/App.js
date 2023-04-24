import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from "./components/SignupFormPage/index.js";
import Navigation from './components/Navigation/index.js';

function App() {
  return (
    <>
      <Navigation/>
      <Switch>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
