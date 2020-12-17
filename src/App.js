import React from 'react';
import './App.css';
import { Home } from './components/Home';
import { Products } from './components/Products';
import { NavBar } from './components/NavBar/NavBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
