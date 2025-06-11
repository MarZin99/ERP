import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./_layout/Layout";
import Employee from "./pages/Employees/Employee";
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <ToastContainer />
        <Routes>
          <Route path="/employees" element={<Employee />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
