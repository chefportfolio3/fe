import React, { Component } from "react";
import { Input, Button, Dialog } from "@material-ui/core";
const axios  = require('axios')

class Register extends Component {
  state = {
    username: "",
    password: "",
    confirmPass: "",
    location: "",
    number: "",
    open: false
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  getToken = async credintials => {
    const res = await axios.post('/route',{...credintials})
    const token = res.data.token
    window.localStorage.setItem("bwToken",token)
  }
  
  handleSubmit = e => {
    e.preventDefault();
    const credintials = {
      username: this.state.username,
      password: this.state.password,
      location: this.state.location,
      number : this.state.number,
    };
    if (this.state.password === this.state.confirmPass) {
      this.handleClose()
      this.getToken(credintials)
    } else {
      console.log(
        "%cPasswords Do not Match Buddy!",
        "color:red;font-size:48px"
      );
      alert("Passwords Do not Match Buddy!");
    }
  };
  handleClose = () => {
    this.setState(prev => ({
      ...prev,
      open: false
    }));
  };

  render() {
    return (
      <>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <form onSubmit={here => this.handleSubmit(here)} className='FormRegister'>
            <Input
              name="username"
              value={this.state.username}
              placeholder="New Username"
              onChange={here => this.handleChange(here)}
              type="text"
              required
            />
            <Input
              name="password"
              value={this.state.password}
              placeholder="New Password"
              onChange={here => this.handleChange(here)}
              type="password"
              required
            />
            <Input
              name="confirmPass"
              value={this.state.confirmPass}
              placeholder="Confirm Password"
              onChange={here => this.handleChange(here)}
              type="password"
              required
            />
            <Input
              name="location"
              value={this.state.location}
              placeholder="Location"
              onChange={here => this.handleChange(here)}
              type="text"
              required
            />
            <Input required />
            name="number" value={this.state.number}
            placeholder="Phone Number" onChange=
            {here => this.handleChange(here)}
            type="tel" required />
            <Button color="primary" variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </Dialog>
        <Button
          onClick={() =>
            this.setState(prev => ({
              ...prev,
              open: true
            }))
          }
        >
          Show Modal
        </Button>
      </>
    );
  }
}

export default Register;