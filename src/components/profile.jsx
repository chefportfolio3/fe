import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Typography as Font,
  Container,
  Paper,
  Button
} from "@material-ui/core";

function Profile({ token,setToken }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const res = await axios(
      "https://mychefportfolio.herokuapp.com/api/auth/users",
      {
        headers: { authorization: token }
      }
    );

    setUser(
      res.data.users.find(user => {
        return window.localStorage.getItem("user") === user.username;
      })
    );
  };

  const logout = () => {
    setToken('')
    window.localStorage.removeItem("bwToken");
    window.localStorage.removeItem("user");
  };

  const { username, location, contact } = user;
  return (
    <Paper elevation={5} className="ProfileRoot">
      <Button onClick={logout}>Log Out</Button>
      <Font variant="h1" align="center">
        Profile
      </Font>
      <Font variant="h2" align="center">
        {username}
      </Font>
      <Font variant="h3" align="center">
        {location}
      </Font>
      <Font variant="h3" align="center">
        Phone: {contact}
      </Font>
    </Paper>
  );
}

export default Profile;
