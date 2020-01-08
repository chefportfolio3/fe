import React,{useState} from "react";
import Login from "./components/login";
import Register from "./components/register";
import './styles/index.css'
import { Container } from "@material-ui/core";
function App() {
  const [token,setToken] = useState(window.localStorage.getItem('bwToken'))
  return (
    <Container className='App' maxWidth='lg'>
      <Login setToken={setToken}/>
      <Register setToken={setToken}/>
    </Container>
  );
}

export default App;
