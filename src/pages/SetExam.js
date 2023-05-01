// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   TableContainer,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Paper,
//   Button,
//   CircularProgress,
// } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import { getQuestionSets } from "https://randomuser.me/";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     marginTop: theme.spacing(4),
//   },
//   table: {
//     minWidth: 650,
//   },
//   addButton: {
//     marginBottom: theme.spacing(2),
//   },
// }));

// const SetExam = () => {
//   const classes = useStyles();
//   const [questionSets, setQuestionSets] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await getQuestionSets();
//         setQuestionSets(response);
//         setIsLoading(false);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   if (isLoading) {
//     return <CircularProgress />;
//   } else {
//     return (
//       <div className={classes.root}>
//         <Button
//           className={classes.addButton}
//           variant="contained"
//           color="primary"
//           component={Link}
//           to="/question-sets/create"
//         >
//           Add New Question Set
//         </Button>
//         <TableContainer component={Paper}>
//           <Table className={classes.table}>
//             <TableHead>
//               <TableRow>
//                 <TableCell>ID</TableCell>
//                 <TableCell>Name</TableCell>
//                 <TableCell>Description</TableCell>
//                 <TableCell>Number of Questions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {questionSets.map((questionSet) => (
//                 <TableRow key={questionSet.id}>
//                   <TableCell>{questionSet.id}</TableCell>
//                   <TableCell>{questionSet.name}</TableCell>
//                   <TableCell>{questionSet.description}</TableCell>
//                   <TableCell>{questionSet.questions.length}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//     );
//   }
// };

// export default SetExam;



import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SetExam = () => {
  const classes = useStyles();
  const [question, setQuestion] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleOption1Change = (event) => {
    setOption1(event.target.value);
  };

  const handleOption2Change = (event) => {
    setOption2(event.target.value);
  };

  const handleOption3Change = (event) => {
    setOption3(event.target.value);
  };

  const handleOption4Change = (event) => {
    setOption4(event.target.value);
  };

  const handleCorrectAnswerChange = (event) => {
    setCorrectAnswer(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="question"
        label="Question"
        value={question}
        onChange={handleQuestionChange}
        fullWidth
        margin="normal"
      />
      <TextField
        id="option1"
        label="Option 1"
        value={option1}
        onChange={handleOption1Change}
        fullWidth
        margin="normal"
      />
      <TextField
        id="option2"
        label="Option 2"
        value={option2}
        onChange={handleOption2Change}
        fullWidth
        margin="normal"
      />
      <TextField
        id="option3"
        label="Option 3"
        value={option3}
        onChange={handleOption3Change}
        fullWidth
        margin="normal"
      />
      <TextField
        id="option4"
        label="Option 4"
        value={option4}
        onChange={handleOption4Change}
        fullWidth
        margin="normal"
      />
      <FormControl className={classes.formControl}>
        <InputLabel id="correct-answer-label">Correct Answer</InputLabel>
        <Select
          labelId="correct-answer-label"
          id="correct-answer"
          value={correctAnswer}
          onChange={handleCorrectAnswerChange}
        >
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
        </Select>
      </FormControl>
      <input
        accept=".pdf"
        id="question-paper-upload"
        type="file"
        onChange={handleFileChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default SetExam;

















