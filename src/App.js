import React,{useState} from "react";
import Login from "./components/login";
import Register from "./components/register";
import './styles/index.css'
import { Container } from "@material-ui/core";
import { Route } from "react-router-dom";
import Profile from './components/profile'
function App() {
  const [token,setToken] = useState(window.localStorage.getItem('bwToken'))
  return (
    <Container className="App" maxWidth="lg">
      <Route
        exact
        path="/"
        render={props => (
          <>
            <Login token={token} />
            <Register setToken={setToken} props={props} />
          </>
        )}
      />
      <Route path='/profile' component={Profile}/>
    </Container>
  );
}

export default App;
