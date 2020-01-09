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
<<<<<<< HEAD
import Post from "./components/post";
=======
import EditItem from "./components/editItem,";
>>>>>>> e914606b9daf63a622206bf66498c9151fedc0a8
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
              <Post/>
            </>
          )}
        />
        <Route exact path='/' component={Home} />
        <Route path='/edit/:id' component={EditItem}/>
        <PrivateRoute path='/profile' component={Profile} setToken={setToken} token={token} />
      </Container>
    </>
  );
}

export default App;
