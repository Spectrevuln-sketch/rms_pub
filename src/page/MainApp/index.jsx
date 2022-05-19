import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AboutPage, HomePage, TrackingPage } from '../../page';
import { TopBarStart, NavBar, Footer } from '../../components';
import { Helmet } from "react-helmet";
const MainApp = () => {
  return (
    <>
      <div>
        <TopBarStart />
        <NavBar />
        <Switch>

          <Route path="/contact">
            <Helmet>
              <meta charSet="utf-8" />
              <title>RMS | Contact Us</title>
            </Helmet>
            <AboutPage />
          </Route>

          <Route path="/about">
            <Helmet>
              <meta charSet="utf-8" />
              <title>RMS | About Page</title>
            </Helmet>
            <AboutPage />
          </Route>
          <Route path="/tracking">
            <Helmet>
              <meta charSet="utf-8" />
              <title>RMS | Tracking</title>
            </Helmet>
            <TrackingPage />
          </Route>
          <Route path="/">
            <Helmet>
              <meta charSet="utf-8" />
              <title>RMS | Home</title>
            </Helmet>
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </>
  )
}

export default MainApp
