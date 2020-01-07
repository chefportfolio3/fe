import React from "react";
import Login from "./components/login";
import Register from "./components/register";
import './styles/index.css'
import { Container } from "@material-ui/core";
function App() {
  return (
    <Container className='App' maxWidth='lg'>
      <Login/>
      <Register/>
    </Container>
  );
}

export default App;
