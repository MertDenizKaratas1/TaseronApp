import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SingIn';
import Header from './components/Header';

import './App.css';
import ManagerManagement from './pages/ManagerManagement';
import ProjectManagement from './pages/ProjectManagement';
import ReportManagement from './pages/RaportManagement';
import ManagementLayout from './pages/layouts/ManagementLayout';

const MainLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
        <Navbar />
        <div style={{ flexGrow: 1, padding: '20px' }}>
          <Routes>
            {/* Group Management-related routes */}
            <Route path="/management" element={<ManagementLayout />}>
              <Route path="manager" element={<ManagerManagement />} />
              <Route path="project" element={<ProjectManagement />} />
              <Route path="report" element={<ReportManagement />} />
            </Route>

            {/* Other routes */}
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

function App() {

  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/*" element={<MainLayout />} />
    </Routes>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}