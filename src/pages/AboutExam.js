import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    maxWidth: "500px",
    padding: "10px",
  },
  examContainer: {
    margin: "10px 0",
    padding: "10px",
    backgroundColor: "white",
  },
  examTitle: {
    marginBottom: "10px",
  },
  examButton: {
    margin: "10px",
  },
});

const AboutExam = () => {
  const classes = useStyles();
  const exams = [
    {
      name: "Exam 1",
      duration: "60 minutes",
      details: "This is the first exam",
      canAttempt: true,
      canView: true,
    },
    {
      name: "Exam 2",
      duration: "90 minutes",
      details: "This is the second exam",
      canAttempt: false,
      canView: true,
    },
    {
      name: "Exam 3",
      duration: "120 minutes",
      details: "This is the third exam",
      canAttempt: true,
      canView: false,
    },
  ];

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Available Exams
          </Typography>
          {exams.map((exam, index) => (
            <div key={index} className={classes.examContainer}>
              <Typography variant="h6" component="h3" className={classes.examTitle}>
                {exam.name}
              </Typography>
              <Typography color="textSecondary">
                Duration: {exam.duration}
              </Typography>
              <Typography variant="body2" component="p">
                {exam.details}
              </Typography>
              {exam.canAttempt && (
                <Button variant="contained" color="primary" className={classes.examButton}>
                  Attempt Exam
                </Button>
              )}
              {exam.canView && (
                <Button variant="contained" color="secondary" className={classes.examButton}>
                  View Exam
                </Button>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutExam;
