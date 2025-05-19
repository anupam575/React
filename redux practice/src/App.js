import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Product from './pages/Product';
import CartPage from './pages/CartPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/success" element={<h2>Thank you for your purchase!</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
