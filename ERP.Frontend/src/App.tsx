import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./_layout/Layout";
import Employee from "./pages/Employees/Employee";
import { ToastContainer } from 'react-toastify';
import { Login } from "./pages/Login/Login";
import { ProtectedRoute } from "./_auth/ProtectedRoute";
import { AuthRedirect } from "./_auth/AuthRedirect";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/employees" element={
             <ProtectedRoute>
              <Employee />
            </ProtectedRoute>
          } />
          <Route path="/" element={<AuthRedirect />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
