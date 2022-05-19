import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { MainApp } from './page';
const Routes = () => {

  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainApp />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
