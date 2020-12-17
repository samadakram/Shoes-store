import React from 'react';
import './App.css';
import { Home } from './components/Home/Home';
import { Launch } from './components/Launch/Lauch';
import { NavBar } from './components/NavBar/NavBar';
import { ProductItem } from './components/ProductItem/ProductItem';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="launch" element={<Launch />} />
          <Route path="launch/:id" element={<ProductItem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
