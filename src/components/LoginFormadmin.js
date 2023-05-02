// // import React from "react";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";

// const LoginAdminForm = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleAdminLogInClick = (e) => {
//     e.preventDefault();
//     if (username === "admin" && password === "admin") {
//       navigate("/admin-dashboard");
//     } else {
//       alert("Invalid Admin credentials");
//     }
//   };

//   return (
//     <form onSubmit={handleAdminLogInClick}>
//       <TextField label="username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)}/>
//       <TextField label="password" variant="outlined" type="password" onChange={(e) => setPassword(e.target.value)} />
//       <Button
//         type="submit"
//         variant="contained"
//         color="primary"
//       >
//         Login
//       </Button>
//     </form>
//   );
// };

// export default LoginAdminForm;






import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20vh",
    
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
  },
  textField: {
    margin: theme.spacing(1),
    width: "100%",
  },
  button: {
    margin: theme.spacing(2, 0),
    width: "100%",
  },
  icon: {
    fontSize: 48,
    marginBottom: theme.spacing(2),
  },
}));

const LoginAdminForm = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [autoFillUsername, setAutoFillUsername] = useState("");
  const [autoFillPassword, setAutoFillPassword] = useState("");
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
    }
  }, []);

  const handleAdminLogInClick = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      navigate("/admin-dashboard");
    } else {
      alert("Invalid Admin credentials");
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (e.target.value.startsWith(autoFillUsername)) {
      passwordRef.current.value = autoFillPassword;
    } else {
      passwordRef.current.value = "";
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.startsWith(autoFillPassword)) {
      usernameRef.current.value = autoFillUsername;
    } else {
      usernameRef.current.value = "";
    }
  };

  const handleUsernameFocus = () => {
    setAutoFillUsername(username);
    setAutoFillPassword(password);
  };

  const handlePasswordFocus = () => {
    setAutoFillUsername(username);
    setAutoFillPassword(password);
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <form className={classes.form} onSubmit={handleAdminLogInClick}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <HomeIcon className={classes.icon} />
          </Link>
          <TextField
            className={classes.textField}
            label="Username"
            variant="outlined"
            value={username}
            onChange={handleUsernameChange}
            onFocus={handleUsernameFocus}
            inputRef={usernameRef}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className={classes.textField}
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onFocus={handlePasswordFocus}
            inputRef={passwordRef}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HomeIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            className={classes.button}
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
      </Grid>
    </div>
  );
};

export default LoginAdminForm;
