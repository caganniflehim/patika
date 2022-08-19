import './App.css';
import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Main } from './screens/main';
import { ProductDetailScreen } from './screens/productDetail';

function App() {

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ProductDetail" element={<ProductDetailScreen />} />
        <Route path="*" element={<h2>BÖYLE BİR SAYFA HİÇ OLMADI</h2>} />
      </Routes>
    </div>
  );
}

export default App;


