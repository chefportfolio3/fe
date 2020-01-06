import React, { Component } from "react";
import { Input, Button, Dialog } from "@material-ui/core";

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

  handleSubmit = e => {
    e.preventDefault();
    this.state.password === this.state.confirmPass ? (
        //Add Post Data
        this.handleClose()
        ):(console.log("%cPasswords Do not Match Buddy!","color:red;font-size:48px"))
  };
handleClose = () => {
    this.setState(prev => ({
        ...prev,
        open:false
    }))
}
  render() {
    return (
      <>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <form onSubmit={here => this.handleSubmit(here)}>
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
            <Input
              name="number"
              value={this.state.number}
              placeholder="Phone Number"
              onChange={here => this.handleChange(here)}
              type="number"
              required
            />
            <Button color="primary" variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </Dialog>
        <Button onClick={()=> this.setState(prev => ({
            ...prev,
            open:true
        }))}>Show Modal</Button>
      </>
    );
  }
}

export default Register;
