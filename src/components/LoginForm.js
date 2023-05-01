// import React from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const LoginAdminForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminLogInClick = (e) => {
    e.preventDefault();
    if (username === "student" && password === "student") {
      navigate("/students");
    } else {
      alert("Invalid Admin credentials");
    }
  };

  return (
    <form onSubmit={handleAdminLogInClick}>
      <TextField
        label="username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="password"
        variant="outlined"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </form>
  );
};

export default LoginAdminForm;
