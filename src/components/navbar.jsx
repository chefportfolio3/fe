import React from 'react';
import { Link } from '@material-ui/core';
import Login from './login'
import Register from './register'
import Post from './post'
import { Route } from 'react-router-dom'
const Navbar = ({setToken,setRecipes}) => {
    return (
      <div className="main">
        <div className="nav-bar">
          <div className="nav-list">
            <Route
              exact
              path="/"
              render={props => (
                <>
                  <Login setToken={setToken} />
                  <Register setToken={setToken} props={props} />
                  <Post setRecipes={setRecipes} />
                </>
              )}
            />
          </div>
        </div>
      </div>
    );
}

export default Navbar;