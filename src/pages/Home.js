// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Container,
//   Typography,
//   Button,
//   Grid,
//   Paper,
// } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import examBackground from "../assets/exam-background.jpg.jpg";
// import Card from '@mui/material/Card';
// import { palette } from '@mui/system';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     // marginTop: theme.spacing(8),
//     // marginBottom: theme.spacing(8),
//     backgroundImage: `url(${examBackground})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     color: "#000",
//     height: '100vh',
//     // padding: theme.spacing(4),
//   },
//   title: {
//     marginBottom: theme.spacing(4),
//     color: "#fff",
//   },
//   subtitle: {
//     marginBottom: theme.spacing(4),
//     color: "#fff",
//   },
//   loginButton: {
//     marginTop: theme.spacing(4),
//   },
//   registerButton: {
//     marginTop: theme.spacing(2),
//   },
//   adminButton: {
//     marginTop: theme.spacing(2),
//   },
  
// }));


// const Home = () => {
//   const classes = useStyles();
//   const navigate = useNavigate();

//   const handleStudentLogInClick = () => {
//     navigate("/studentlogin");
//   };

//   const handleRegisterClick = () => {
//     navigate("/StudentRegistrationForm");
//   };

//   const handleAdminLoginClick = () => {
//     navigate("/adminlogin");
//   };

//   return (
//     <Paper className={classes.container}>
//       <Container   maxWidth='xl'>
//         <Typography variant="h4" align="center" className={classes.title}>
//           Welcome to the Exam Portal
//         </Typography>
//         <Card sx={{ minWidth: 275, p: 2 ,pb: 5}}>
//         <Typography style={{color:"red"}} variant="body1" align="center" className={classes.subtitle}>
//           About Exam Portal: Simply Powerful ONLINE EXAMS Exam.net equips you
//           with all the power and function you need to securely create, conduct and
//           mark exams for your students. Create and conduct your first exam in less
//           than an hour.
//         </Typography>
//         <Typography variant="h6" align="center" gutterBottom>
//           Login
//         </Typography>
//         <Grid container spacing={2} justifyContent="center">
//           <Grid item xs={12} sm={6}>
//             <Button
//               variant="contained"
//               color="primary"
//               fullWidth
//               className={classes.loginButton}
//               onClick={handleStudentLogInClick}
//             >
//               Student Login
//             </Button>
//           </Grid>
//         </Grid>
//         <Typography variant="h6" align="center" gutterBottom>
//           Register
//         </Typography>
//         <Typography variant="body1" align="center" gutterBottom>
//           If you're a new student, please register here:
//         </Typography>
//         <Grid container spacing={2} justifyContent="center">
//           <Grid item xs={12} sm={6}>
//             <Button
//               variant="contained"
//               color="secondary"
//               fullWidth
//               className={classes.registerButton}
//               onClick={handleRegisterClick}
//             >
//               Register as Student
//             </Button>
//           </Grid>
//         </Grid>
//         <Typography variant="h6" align="center" gutterBottom>
//           Login As Admin
//         </Typography>
//         <Grid container spacing={2} justifyContent="center">
//           <Grid item xs={12} sm={6}>
//             <Button
//               variant="contained"
//               color="primary"
//               fullWidth
//               className={classes.adminButton}
//               onClick={handleAdminLoginClick}
//             >
//               Admin Login
//             </Button>
//           </Grid>
//         </Grid>
//         </Card >
//       </Container>
//       </Paper>
//   );
// };

// export default Home;



import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Grid,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import examBackground from "../assets/exam-background.jpg.jpg";
import Card from '@mui/material/Card';
// import { palette } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  container: {
    // marginTop: theme.spacing(8),
    // marginBottom: theme.spacing(8),
    backgroundImage: `url(${examBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "# rgba(255, 255, 255, 0.8)",
    height: '100vh',
    // padding: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(4),
    color: "#fff",
  },
  subtitle: {
    marginBottom: theme.spacing(4),
    color: "#fff",
  },
  loginButton: {
    marginTop: theme.spacing(4),
  },
  registerButton: {
    marginTop: theme.spacing(2),
  },
  adminButton: {
    marginTop: theme.spacing(2),
  },
  
}));


const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleStudentLogInClick = () => {
    navigate("/studentlogin");
  };

  const handleRegisterClick = () => {
    navigate("/StudentRegistrationForm");
  };

  const handleAdminLoginClick = () => {
    navigate("/adminlogin");
  };

  return (
    <Paper className={classes.container}>
      <Container   maxWidth='sm'>
        <Typography variant="h4" align="center" className={classes.title}>
          Welcome to the Exam Portal
        </Typography>
        <Card sx={{ minWidth: 275, p: 2 ,pb: 5}} style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          
        <Typography style={{color:"red"}} variant="body1" align="center" className={classes.subtitle}>
          About Exam Portal: Simply Powerful ONLINE EXAMS Exam.net equips you
          with all the power and function you need to securely create, conduct and
          mark exams for your students. Create and conduct your first exam in less
          than an hour.
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
              className={classes.loginButton}
              onClick={handleStudentLogInClick}
            >
              Student Login
            </Button>
          </Grid>
        </Grid>
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
              color="secondary"
              fullWidth
              className={classes.registerButton}
              onClick={handleRegisterClick}
            >
              Register as Student
            </Button>
          </Grid>
        </Grid>
        <Typography variant="h6" align="center" gutterBottom>
          Login As Admin
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className={classes.adminButton}
              onClick={handleAdminLoginClick}
            >
              Admin Login
            </Button>
          </Grid>
        </Grid>
      
        </Card >
      </Container>
      </Paper>
  );
};

export default Home;
