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
import EditItem from "./components/editItem,";
function App() {
  const [token, setToken] = useState(window.localStorage.getItem('bwToken'))
  const [recipes, setRecipes] = useState([]);
  return (
    <>
      <Navbar setToken = {setToken} setRecipes={setRecipes}/>
      <Container className="App" maxWidth="lg">
        <Route exact path='/' render={() => <Home recipes={recipes} setRecipes={setRecipes}/>} />
        <Route path='/edit/:id' component={EditItem}/>
        <PrivateRoute path='/profile' component={Profile} setToken={setToken} token={token} />
      </Container>
    </>
  );
}

export default App;
