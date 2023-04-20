import React from 'react';
import { Typography, Button } from '@material-ui/core';

const ExamDetails = ({ examId }) => {
  // Fetch exam details data from API or state

  const handleStartExam = () => {
    // Handle start exam logic here
  };

  return (
    <div>
      <Typography variant="h6">Exam Details for Exam {examId}</Typography>
      {/* Render exam details */}
      {/* ... */}
      <Button variant="contained" color="primary" onClick={handleStartExam}>
        Start Exam
      </Button>
    </div>
  );
};

export default ExamDetails;


