
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import { Container, Grid, Card, CardContent, Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Drawer } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  tableContainer: {
    marginTop: theme.spacing(3),
  },
  card: {
    height: '100%',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

const AdminDashboard = () => {
  const classes = useStyles();

  // Dummy data for table
  const students = [    { id: 1, name: 'John Doe', age: 25, grade: 'A' },    { id: 2, name: 'Jane Smith', age: 22, grade: 'B' },    { id: 3, name: 'Mark Johnson', age: 21, grade: 'C' },    { id: 4, name: 'Anna Brown', age: 24, grade: 'A' },  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={classes.root}>
      <Header onMenuClick={toggleSidebar} />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={sidebarOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Sidebar />
      </Drawer>
      <div className={classes.content}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              {/* Table to display students */}
              <TableContainer className={classes.tableContainer}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Age</TableCell>
                      <TableCell>Grade</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {students.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>{student.id}</TableCell>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>{student.age}</TableCell>
                        <TableCell>{student.grade}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={12} md={4}>
              {/* Cards to show additional information */}
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <div>
                  <Typography variant="h6">Total Exams</Typography>
                    <Typography variant="h4">10</Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default AdminDashboard;
                    













































































































// // import React, { useState } from 'react';
// // import { makeStyles } from '@material-ui/core/styles';
// // import Sidebar from './Sidebar';
// // import Header from './Header';
// // import Footer from './Footer';
// // import { Container, Grid, Card, CardContent, Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

// // const useStyles = makeStyles((theme) => ({
// // root: {
// // display: 'flex',
// // },
// // content: {
// // flexGrow: 1,
// // padding: theme.spacing(3),
// // },
// // tableContainer: {
// // marginTop: theme.spacing(3),
// // },
// // card: {
// // height: '100%',
// // },
// // cardContent: {
// // display: 'flex',
// // justifyContent: 'space-between',
// // },
// // }));

// // const AdminDashboard = () => {
// // const classes = useStyles();

// // // Dummy data for table
// // const students = [ { id: 1, name: 'John Doe', age: 25, grade: 'A' }, { id: 2, name: 'Jane Smith', age: 22, grade: 'B' }, { id: 3, name: 'Mark Johnson', age: 21, grade: 'C' }, { id: 4, name: 'Anna Brown', age: 24, grade: 'A' }, ];

// // const [sidebarOpen, setSidebarOpen] = useState(false);

// // const toggleSidebar = () => {
// // setSidebarOpen(!sidebarOpen);
// // };

// // return (
// // <div className={classes.root}>
// // <Header onMenuClick={toggleSidebar} />
// // <Sidebar open={sidebarOpen} />
// // <div className={classes.content}>
// // <Container>
// // <Grid container spacing={3}>
// // <Grid item xs={12} md={8}>
// // {/* Table to display students /}
// // <TableContainer className={classes.tableContainer}>
// // <Table>
// // <TableHead>
// // <TableRow>
// // <TableCell>ID</TableCell>
// // <TableCell>Name</TableCell>
// // <TableCell>Age</TableCell>
// // <TableCell>Grade</TableCell>
// // </TableRow>
// // </TableHead>
// // <TableBody>
// // {students.map((student) => (
// // <TableRow key={student.id}>
// // <TableCell>{student.id}</TableCell>
// // <TableCell>{student.name}</TableCell>
// // <TableCell>{student.age}</TableCell>
// // <TableCell>{student.grade}</TableCell>
// // </TableRow>
// // ))}
// // </TableBody>
// // </Table>
// // </TableContainer>
// // </Grid>
// // <Grid item xs={12} md={4}>
// // {/ Cards to show additional information */}
// // <Card className={classes.card}>
// // <CardContent className={classes.cardContent}>
// // <div>
// // <Typography variant="h6">Total Students</Typography>
// // <Typography variant="h4">100</Typography>
// // </div>
// // <div>
// // <Typography variant="h6">Total Exams</Typography>
// // <Typography variant="h4">10</Typography>
// // </div>
// // </CardContent>
// // </Card>
// // </Grid>
// // </Grid>
// // </Container>
// // <Footer />
// // </div>
// // </div>
// // );
// // };

// // export default AdminDashboard;






























// // import React, { useEffect, useState } from "react";
// // import { makeStyles } from "@material-ui/core/styles";
// // import {
// //   Card,
// //   CardContent,
// //   Typography,
// //   Grid,
// //   CircularProgress,
// // } from "@material-ui/core";

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     flexGrow: 1,
// //     marginTop: theme.spacing(4),
// //   },
// //   card: {
// //     height: "100%",
// //   },
// //   cardContent: {
// //     textAlign: "center",
// //   },
// // }));

// // const AdminDashboard = () => {
// //   const classes = useStyles();
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [enrollmentCount, setEnrollmentCount] = useState(0);
// //   const [questionSetCount, setQuestionSetCount] = useState(0);
// //   const [upcomingExam, setUpcomingExam] = useState("");
// //   const [passCount, setPassCount] = useState(0);
// //   const [failCount, setFailCount] = useState(0);
// //   const [totalCount, setTotalCount] = useState(0);

// //   useEffect(() => {
// //     // Fetch all the necessary data from the server and update the state
// //     const fetchDashboardData = async () => {
// //       try {
// //         // Example endpoint URLs
// //         const enrollmentCountRes = await fetch("/api/enrollment/count");
// //         const enrollmentCountJson = await enrollmentCountRes.json();
// //         setEnrollmentCount(enrollmentCountJson.count);

// //         const questionSetCountRes = await fetch("/api/questionset/count");
// //         const questionSetCountJson = await questionSetCountRes.json();
// //         setQuestionSetCount(questionSetCountJson.count);

// //         const upcomingExamRes = await fetch("/api/exam/upcoming");
// //         const upcomingExamJson = await upcomingExamRes.json();
// //         setUpcomingExam(upcomingExamJson.examDate);

// //         const examResultsRes = await fetch("/api/exam/results");
// //         const examResultsJson = await examResultsRes.json();
// //         setPassCount(examResultsJson.passCount);
// //         setFailCount(examResultsJson.failCount);
// //         setTotalCount(examResultsJson.totalCount);

// //         setIsLoading(false);
// //       } catch (err) {
// //         console.error(err);
// //       }
// //     };

// //     fetchDashboardData();
// //   }, []);

// //   if (isLoading) {
// //     return <CircularProgress />;
// //   } else {
// //     return (
// //       <Grid container spacing={4}>
// //         <Grid item xs={12} sm={6} md={3}>
// //           <Card className={classes.card}>
// //             <CardContent className={classes.cardContent}>
// //               <Typography color="textSecondary" variant="h6" gutterBottom>
// //                 Enrollment Count
// //               </Typography>
// //               <Typography color="primary" variant="h4">
// //                 {enrollmentCount}
// //               </Typography>
// //             </CardContent>
// //           </Card>
// //         </Grid>
// //         <Grid item xs={12} sm={6} md={3}>
// //           <Card className={classes.card}>
// //             <CardContent className={classes.cardContent}>
// //               <Typography color="textSecondary" variant="h6" gutterBottom>
// //                 Question Set Count
// //               </Typography>
// //               <Typography color="primary" variant="h4">
// //                 {questionSetCount}
// //               </Typography>
// //             </CardContent>
// //           </Card>
// //         </Grid>
// //         <Grid item xs={12} sm={6} md={3}>
// //           <Card className={classes.card}>
// //             <CardContent className={classes.cardContent}>
// //               <Typography color="textSecondary" variant="h6" gutterBottom>
// //                 Upcoming Exam
// //               </Typography>
// //               <Typography color="primary" variant="h4">
// //                 {upcomingExam}
// //               </Typography>
// //             </CardContent>
// //           </Card>
// //         </Grid>
// //       </Grid>
// //     );
// //   }
  
// // }
// // export default AdminDashboard;



