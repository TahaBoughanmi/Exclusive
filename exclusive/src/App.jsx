import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/home/SignUp';
import Login from './components/home/Login';
import { AuthProvider } from './components/context/AuthContext';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
