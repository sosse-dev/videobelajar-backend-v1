import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProfileSetting from "./pages/setting/ProfileSetting";
import ProtectedRoute from "./components/pages/_generic/container/protector/ProtectedRoute";
import ProtectedLoginSignupRoute from "./components/pages/_generic/container/protector/ProtectedLoginSignup";
import { Toaster } from "sonner";
import Users from "./pages/Users";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <ProtectedLoginSignupRoute>
              <Login />
            </ProtectedLoginSignupRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedLoginSignupRoute>
              <Signup />
            </ProtectedLoginSignupRoute>
          }
        />
        <Route
          path="/setting/profile"
          element={
            <ProtectedRoute>
              <ProfileSetting />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users-list"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Toaster position="top-center" />
    </Router>
  );
};

export default App;
