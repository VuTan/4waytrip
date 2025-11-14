import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import TourDetail from './TourDetail';
import Tours from './Tours';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tour/:tourId" element={<TourDetail />} />
      <Route path="/tours/:type" element={<Tours/>} />
      <Route path="/tours/:type" element={<Tours/>} />
    </Routes>
  );
}

export default App;
