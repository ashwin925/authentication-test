import React, { useState, useEffect } from 'react';
import { auth } from './firebase'; // Import Firebase auth
import { onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login'; 
import Signup from './components/signup'; 
import Home from '../src/components/home'; 

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home user={user} /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
