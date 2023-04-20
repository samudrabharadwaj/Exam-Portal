import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  tableContainer: {
    marginTop: theme.spacing(3),
  },
  card: {
    height: "100%",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Students = () => {
  const classes = useStyles();

  // Dummy data for table
  const students = [
    { id: 1, name: "John Doe", percentage: 85 },
    { id: 2, name: "Jane Smith", percentage: 92 },
    { id: 3, name: "Mark Johnson", percentage: 78 },
    { id: 4, name: "Anna Brown", percentage: 95 },
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
                      <TableCell>Percentage</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {students.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>{student.id}</TableCell>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>{student.percentage}%</TableCell>
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
                    <Typography variant="h4">{students.length}</Typography>
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

export default Students;
