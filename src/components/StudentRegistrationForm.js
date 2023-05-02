// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Container, Typography, TextField, Button, } from "@material-ui/core";
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
//   loginLink: {
//     marginTop: theme.spacing(2),
//   },
// }));

// const StudentRegistrationForm = () => {
//   const classes = useStyles();
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: Implement logic to submit form data to server
//     // Redirect to student dashboard after successful registration
//     navigate("/student/dashboard");
//   };

//   return (
//     <Container maxWidth="xs" className={classes.container}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Student Registration
//       </Typography>
//       <form onSubmit={handleSubmit} className={classes.form}>
//         <TextField
//           label="First Name"
//           fullWidth
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//           margin="normal"
//         />
//         <TextField
//           label="Last Name"
//           fullWidth
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//           margin="normal"
//         />
//         <TextField
//           label="Email"
//           fullWidth
//           name="email"
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//           margin="normal"
//         />
//         <TextField
//           label="Password"
//           fullWidth
//           name="password"
//           type="password"
//           value={formData.password}
//           onChange={handleChange}
//           margin="normal"
//         />
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           fullWidth
//           className={classes.submitButton}
//         >
//           Register
//         </Button>
//       </form>
//       <Typography variant="body1" align="center" className={classes.loginLink}>
//         Already have an account?{" "}
//         <Link to="/studentlogin">
//           Login
//         </Link>
//       </Typography>
//     </Container>
//   );
// };

// export default StudentRegistrationForm;






import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Typography, TextField, Button, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  form: {
    marginTop: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  loginLink: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(4),
  },
}));

const StudentRegistrationForm = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("studentUsername", formData.firstName + formData.lastName);
    localStorage.setItem("studentPassword", formData.password);
    navigate("/student/dashboard");
  };

  return (
    <Container maxWidth="xs" className={classes.container}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h4" align="center" gutterBottom>
          Student Registration
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                fullWidth
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                fullWidth
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                fullWidth
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submitButton}
          >
            Register
          </Button>
        </form>
        <Typography variant="body1" align="center" className={classes.loginLink}>
          Already have an account?{" "}
          <Link to="/studentlogin">
            Login
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default StudentRegistrationForm;
