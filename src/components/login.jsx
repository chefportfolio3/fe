import React, { useState } from 'react';
import { Input, Button, Dialog, Typography as Font } from '@material-ui/core';

import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = props => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  })
  const [modal, setModal] = useState(false)
  const history = useHistory();

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = e => {
    e.preventDefault();
    // request here
    axios.post('https://mychefportfolio.herokuapp.com/api/auth/login', user)
      .then(res => {
        localStorage.setItem('bwToken', res.data.token)
        props.setToken(localStorage.getItem('bwToken'))
        history.push('/profile')
      })
    setUser({
      username: '',
      password: ''
    })
    handleClose();
  }

  const handleClose = () => {
    setModal(false)
  }

  return (
    <>
      <Dialog open={modal} onClose={handleClose} className="FormLogin">
        <Font variant='h3' align='center'>Login Now!</Font>
        <form onSubmit={handleSubmit}>
          <Input
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />
          <Button color="primary" variant="contained" type="submit">
            Login
            </Button>
        </form>
      </Dialog>
      <Button onClick={() => setModal(true)}>Show Login</Button>
    </>
  );
}

export default Login;