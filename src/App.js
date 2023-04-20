import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Students from "./pages/Students";
import UserManagement from "./pages/UserManagement";
import SetExam from "./pages/SetExam";
import ResultAnalysis from "./pages/ResultAnalysis";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import StudentRegistrationForm from "./components/StudentRegistrationForm";
import ExamList from "./components/ExamList";
import ExamDetailsComponent from "./components/ExamDetails";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Routes>
      {/* Route for Home page */}
      <Route exact path="/" element={<Home />} />

      {/* Route for Exam Details page */}
      <Route path="/students" element={<Students />} />

      {/* Route for User Management page */}
      <Route path="/user-management" element={<UserManagement />} />

      {/* Route for Set Exam page */}
      <Route path="/set-exam" element={<SetExam />} />

      {/* Route for Result Analysis page */}
      <Route path="/result-analysis" element={<ResultAnalysis />} />

      {/* Route for Admin Dashboard */}
      <Route path="/admin-dashboard" element={<AdminDashboard />} />

      {/* Route for User Dashboard */}
      <Route path="/user-dashboard" element={<UserDashboard />} />

      {/* Route for Login Form */}
      <Route path="/login" element={<LoginForm />} />

      {/* Route for Registration Form */}
      <Route path="/registration" element={<RegistrationForm />} />

      {/* Route for Exam List */}
      <Route path="/exam-list" element={<ExamList />} />

      {/* Route for Exam Details Component */}
      <Route
        path="/exam-details-component"
        element={<ExamDetailsComponent />}
      />

      {/* Route for Sidebar */}
      <Route path="/sidebar" elementt={<Sidebar />} />

      <Route path="/StudentRegistrationForm" element={<StudentRegistrationForm/>} />

     </Routes>
  );
};

export default App;
