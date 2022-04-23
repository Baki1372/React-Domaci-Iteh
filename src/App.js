import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />

        </Routes>
      </Router >
    </div>
  );
}

export default App;
