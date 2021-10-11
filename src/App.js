
import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Article from './Components/Article';
// import Admin from './Components/Admin';
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
            {/* <Admin /> */}
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

