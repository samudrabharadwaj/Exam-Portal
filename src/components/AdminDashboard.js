import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import { Container, Grid, Card, CardContent, Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

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
}));

const AdminDashboard = () => {
  const classes = useStyles();

  // Dummy data for table
  const students = [
    { id: 1, name: 'John Doe', age: 25, grade: 'A' },
    { id: 2, name: 'Jane Smith', age: 22, grade: 'B' },
    { id: 3, name: 'Mark Johnson', age: 21, grade: 'C' },
    { id: 4, name: 'Anna Brown', age: 24, grade: 'A' },
  ];

  return (
    <div className={classes.root}>
      <Sidebar />
      <div className={classes.content}>
        <Header />
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
                    <Typography variant="h6">Total Students</Typography>
                    <Typography variant="h4">100</Typography>
                  </div>
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
