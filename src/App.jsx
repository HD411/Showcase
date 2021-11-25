import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  //Navigate,
  Routes,
} from 'react-router-dom';

import './App.css';

// Pages
import Home from './pages/Home';
import FrontEnd from './pages/frontEnd';
import JavaScript from './pages/JavaScript';
import Reactpage from './pages/React';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/frontend" element={<FrontEnd />} />
        <Route path="/JavaScript" element={<JavaScript />} />
        <route path="/Reactpage" element={<Reactpage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
