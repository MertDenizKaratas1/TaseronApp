import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Billing from './pages/Billing';
import SignIn from './pages/SingIn';
import Header from './components/Header';

import './App.css';

const MainLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
        <Navbar />
        <div style={{ flexGrow: 1, padding: '20px' }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

function App() {
  const location = useLocation();

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