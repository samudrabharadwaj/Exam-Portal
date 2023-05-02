// // // import React from "react";
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import TextField from "@material-ui/core/TextField";
// // import Button from "@material-ui/core/Button";

// // const LoginAdminForm = () => {
// //   const navigate = useNavigate();
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleAdminLogInClick = (e) => {
// //     e.preventDefault();
// //     if (username === "student" && password === "student") {
// //       navigate("/students");
// //     } else {
// //       alert("Invalid Admin credentials");
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleAdminLogInClick}>
// //       <TextField
// //         label="username"
// //         variant="outlined"
// //         value={username}
// //         onChange={(e) => setUsername(e.target.value)}
// //       />
// //       <TextField
// //         label="password"
// //         variant="outlined"
// //         type="password"
// //         onChange={(e) => setPassword(e.target.value)}
// //       />
// //       <Button type="submit" variant="contained" color="primary">
// //         Login
// //       </Button>
// //     </form>
// //   );
// // };

// // export default LoginAdminForm;










// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Container, Typography, TextField, Button } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     marginTop: theme.spacing(8),
//     marginBottom: theme.spacing(8),
//   },
//   form: {
//     marginTop: theme.spacing(2),
//   },
//   submitButton: {
//     marginTop: theme.spacing(2),
//   },
//   registerLink: {
//     marginTop: theme.spacing(2),
//   },
//   errorText: {
//     color: "red",
//     marginTop: theme.spacing(1),
//   },
// }));

// const StudentLoginForm = () => {
//   const classes = useStyles();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });
//   const [autoFillUsername, setAutoFillUsername] = useState("");
//   const [autoFillPassword, setAutoFillPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const usernameRef = useRef(null);
//   const passwordRef = useRef(null);

//   useEffect(() => {
//     const storedUsername = localStorage.getItem("studentUsername");
//     const storedPassword = localStorage.getItem("studentPassword");
//     if (storedUsername && storedPassword) {
//       setFormData({
//         username: storedUsername,
//         password: storedPassword,
//       });
//       setAutoFillUsername(storedUsername);
//       setAutoFillPassword(storedPassword);
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.username === "student" && formData.password === "student") {
//       navigate("/student/dashboard");
//     } else {
//       setErrorMessage("Invalid username or password");
//     }
//   };

//   const handleUsernameFocus = () => {
//     usernameRef.current.value = autoFillUsername;
//     passwordRef.current.value = autoFillPassword;
//   };

//   return (
//     <Container maxWidth="xs" className={classes.container}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Student Login
//       </Typography>
//       <form onSubmit={handleSubmit} className={classes.form}>
//         <TextField
//           label="Username"
//           fullWidth
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//           margin="normal"
//           inputRef={usernameRef}
//           onFocus={handleUsernameFocus}
//         />
//         <TextField
//           label="Password"
//           fullWidth
//           name="password"
//           type="password"
//           value={formData.password}
//           onChange={handleChange}
//           margin="normal"
//           inputRef={passwordRef}
//           onFocus={handleUsernameFocus}
//         />
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           fullWidth
//           className={classes.submitButton}
//         >
//           Login
//         </Button>
//         {errorMessage && (
//           <Typography variant="body1" align="center" className={classes.errorText}>
//             {errorMessage}
//           </Typography>
//         )}
//       </form>
//       <Typography variant="body1" align="center" className={classes.registerLink}>
//         New student?{" "}
//         <Link to="/StudentRegistrationForm">
//           Register
//         </Link>
//       </Typography>
//     </Container>
//   );
// };

// export default StudentLoginForm;





import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Typography, TextField, Button, Paper, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  form: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  registerLink: {
    marginTop: theme.spacing(2),
  },
  errorText: {
    color: "red",
    marginTop: theme.spacing(1),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

const StudentLoginForm = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [autoFillUsername, setAutoFillUsername] = useState("");
  const [autoFillPassword, setAutoFillPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("studentUsername");
    const storedPassword = localStorage.getItem("studentPassword");
    if (storedUsername && storedPassword) {
      setFormData({
        username: storedUsername,
        password: storedPassword,
      });
      setAutoFillUsername(storedUsername);
      setAutoFillPassword(storedPassword);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsername = localStorage.getItem("studentUsername");
    const storedPassword = localStorage.getItem("studentPassword");
    if (formData.username === storedUsername && formData.password === storedPassword) {
      navigate("/student/dashboard");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  const handleUsernameFocus = () => {
    usernameRef.current.value = autoFillUsername;
    passwordRef.current.value = autoFillPassword;
  };

  return (
    <Container maxWidth="xs" className={classes.container}>
      <Paper elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h4" align="center" gutterBottom>
          Student Login
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField
            label="Username"
            fullWidth
            name="username"
            value={formData.username}
            onChange={handleChange}
            margin="normal"
            inputRef={usernameRef}
            onFocus={handleUsernameFocus}
          />
          <TextField
            label="Password"
            fullWidth
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            inputRef={passwordRef}
            onFocus={handleUsernameFocus}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submitButton}
          >
            Login
          </Button>
          {errorMessage && (
            <Typography variant="body1" align="center" className={classes.errorText}>
              {errorMessage}
            </Typography>
          )}
        </form>
        <Typography variant="body1" align="center" className={classes.registerLink}>
          New student?{" "}
          <Link to="/StudentRegistrationForm">
            Register
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default StudentLoginForm;
