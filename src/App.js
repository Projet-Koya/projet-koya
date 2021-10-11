<<<<<<< HEAD
import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

// Import Components
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar' ;
import Footer from './components/footer/Footer';

const App = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Footer />
        </>
    )
}
export default App;
=======

import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Article from './Components/Article';
import Admin from './Components/Admin';
import NavbarComponent from './Components/NavbarComponent';

export const LoginContext = React.createContext();

const App = () => {
  const [LogStatus, setLogStatus] = useState(false);
  const [EmailUser, setUserEmail] = useState()
  const [userID, setUserID] = useState()
  const value = {
    LogStatus: LogStatus,
    setLogStatus: setLogStatus,
    EmailUser: EmailUser,
    setUserEmail: setUserEmail,
    userID: userID,
    setUserID: setUserID
  };
  return (
    <LoginContext.Provider value={value}>
      <BrowserRouter>
        <NavbarComponent />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/article/:title">
            <Article />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </LoginContext.Provider>
  );
};

export default App;

>>>>>>> 369775cc7cc39fb0961633d507507138c2a487ec
