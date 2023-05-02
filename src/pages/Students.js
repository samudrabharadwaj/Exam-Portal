// import React from "react";
// import { Card, CardContent, Typography, Button } from "@material-ui/core";

// const StudentHome = () => {
//   const exams = [
//     {
//       name: "Exam 1",
//       duration: "60 minutes",
//       details: "This is the first exam",
//       canAttempt: true,
//       canView: true,
//     },
//     {
//       name: "Exam 2",
//       duration: "90 minutes",
//       details: "This is the second exam",
//       canAttempt: false,
//       canView: true,
//     },
//     {
//       name: "Exam 3",
//       duration: "120 minutes",
//       details: "This is the third exam",
//       canAttempt: true,
//       canView: false,
//     },
//   ];

//   return (
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <Card style={{ maxWidth: "500px" }}>
//         <CardContent style={{ padding: "10px" }}>
//           <Typography variant="h5" component="h2">
//             Available Exams
//           </Typography>
//           {exams.map((exam, index) => (
//             <div key={index} style={{ margin: "10px 0", padding: "10px", backgroundColor: "white" }}>
//               <Typography variant="h6" component="h3">
//                 {exam.name}
//               </Typography>
//               <Typography color="textSecondary">
//                 Duration: {exam.duration}
//               </Typography>
//               <Typography variant="body2" component="p">
//                 {exam.details}
//               </Typography>
//               {exam.canAttempt && (
//                 <Button variant="contained" color="primary" style={{ margin: "10px" }}>
//                   Attempt Exam
//                 </Button>
//               )}
//               {exam.canView && (
//                 <Button variant="contained" color="secondary" style={{ margin: "10px" }}>
//                   View Exam
//                 </Button>
//               )}
//             </div>
//           ))}
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default StudentHome;











import React from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";

const StudentHome = () => {
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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ maxWidth: "500px" }}>
        <CardContent style={{ padding: "10px" }}>
          <Typography variant="h5" component="h2">
            Available Exams
          </Typography>
          {exams.map((exam, index) => (
            <div key={index} style={{ margin: "10px 0", padding: "10px", backgroundColor: "white" }}>
              <Typography variant="h6" component="h3">
                {exam.name}
              </Typography>
              <Typography color="textSecondary">
                Duration: {exam.duration}
              </Typography>
              <Typography variant="body2" component="p">
                {exam.details}
              </Typography>
              {exam.canAttempt && (
                <Button variant="contained" color="primary" style={{ margin: "10px" }}>
                  Attempt Exam
                </Button>
              )}
              {exam.canView && (
                <Button variant="contained" color="secondary" style={{ margin: "10px" }}>
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

export default StudentHome;
