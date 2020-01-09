import React, { useState } from "react";
import Login from "./components/login";
import Register from "./components/register";
import './styles/index.css'
import { Container } from "@material-ui/core";
import { Route } from "react-router-dom";
import Profile from './components/profile'
import Home from "./components/home";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/navbar";
function App() {
  const [token, setToken] = useState(window.localStorage.getItem('bwToken'))
  return (
    <>
      <Navbar />
      <Container className="App" maxWidth="lg">
        <Route
          exact
          path="/"
          render={props => (
            <>
              <Login setToken={setToken} />
              <Register setToken={setToken} props={props} />
            </>
          )}
        />
        <Route exact path='/' component={Home} />
        <PrivateRoute path='/profile' component={Profile} setToken={setToken} token={token} />
      </Container>
    </>
  );
}

export default App;
