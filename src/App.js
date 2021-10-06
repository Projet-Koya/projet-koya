
import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Article from './Components/Article';
import NavbarComponent from './Components/NavbarComponent';

export const LoginContext = React.createContext();

const App = () => {
  const [LogStatus, setLogStatus] = useState(false);
  return (
    <LoginContext.Provider value={LogStatus}>
      <BrowserRouter>
        <NavbarComponent />
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Article/:id">
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

