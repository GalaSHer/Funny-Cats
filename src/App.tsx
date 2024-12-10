import React from 'react';
import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import { ProductDetails } from './pages/ProductDetails/ProductDetails';
import { NewProductPage } from './pages/NewProductPage/NewProductPage';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/create-product" element={<NewProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
