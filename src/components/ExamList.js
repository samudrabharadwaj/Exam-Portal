
import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const ExamList = () => {
  // Fetch exam list data from API or state

  const handleExamClick = (examId) => {
    // Handle exam click logic here
  };

  return (
    <List>
      {/* Render exam list items */}
      <ListItem button onClick={() => handleExamClick(1)}>
        <ListItemText primary="Exam 1" />
      </ListItem>
      <ListItem button onClick={() => handleExamClick(2)}>
        <ListItemText primary="Exam 2" />
      </ListItem>
      {/* ...more exam list items */}
    </List>
  );
};

export default ExamList;
