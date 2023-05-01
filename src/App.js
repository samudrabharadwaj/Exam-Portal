import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import StudentHome from "./pages/Students";
import UserManagement from "./pages/UserManagement";
import SetExam from "./pages/SetExam";
import ResultAnalysis from "./pages/ResultAnalysis";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import LoginForm from "./components/LoginForm";
import LoginAdminForm from "./components/LoginFormadmin";
import RegistrationForm from "./components/RegistrationForm";
import StudentRegistrationForm from "./components/StudentRegistrationForm";
import ExamList from "./components/ExamList";
import ExamDetailsComponent from "./components/ExamDetails";
import Sidebar from "./components/Sidebar";
import AboutExam from "./pages/AboutExam";

const App = () => {
  return (
    <Routes>
      {/* Route for Home page */}
      <Route exact path="/" element={<Home />} />

      {/* Route for Exam Details page */}
      <Route path="/students" element={<StudentHome />} />

      {/* Route for AboutExam page in admin Dashboard */}
      <Route path="/aboutexam" element={<AboutExam />} />


      {/* Route for User Management page */}
      <Route path="/user-management" element={<UserManagement />} />

      {/* Route for Set Exam page */}
      <Route path="/setexam" element={<SetExam />} />

      {/* Route for Result Analysis page */}
      <Route path="/result-analysis" element={<ResultAnalysis />} />

      {/* Route for Admin Dashboard */}
      <Route path="/admin-dashboard" element={<AdminDashboard />} />

      {/* Route for User Dashboard */}
      <Route path="/user-dashboard" element={<UserDashboard />} />

      {/* Route for Login Form */}
      <Route path="/studentlogin" element={<LoginForm />} />

      {/* Route for ADmin Login Form */}
      <Route path="/adminlogin" element={<LoginAdminForm />} />

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

      <Route
        path="/StudentRegistrationForm"
        element={<StudentRegistrationForm />}


        
      />
    </Routes>
  );
};

export default App;
