import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Grid,
  TextField,
} from "@material-ui/core";

const Home = () => {
  const navigate = useNavigate();

  const handleStudentLogInClick = () => {
    navigate("/studentlogin");
  };

  const handleRegisterClick = () => {
    // Redirect to register page
    navigate("/StudentRegistrationForm");
  };

  const handleAdminLoginClick = () => {
    navigate("/adminlogin");
  };


  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to the Exam Portal
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        About Exam Portal: [Simply Powerful ONLINE EXAMS Exam.net equips you
        with all the power and function you need to securely create, conduct and
        mark exams for your students. Create and conduct your first exam in less
        than an hour.]
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        Login
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleStudentLogInClick}
          >
            Student Login
            </Button>
        </Grid>
      </Grid>
     


      <Grid/>
      <Typography variant="h6" align="center" gutterBottom>
        Register
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        If you're a new student, please register here:
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleRegisterClick}
          >
            Register as Student
          </Button>
        </Grid>
      </Grid>
      <Typography variant="h6" align="center" gutterBottom>
      Login As ADmin
        </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleAdminLoginClick}
          >
           Admin Login
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
