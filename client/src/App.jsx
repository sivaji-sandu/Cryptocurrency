//app.jsx original
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Coin from './pages/Coin/Coin';
import Footer from './components/Footer/Footer';
import Features from './pages/Features/Features';
import Pricing from './pages/Pricing/Pricing';
import FAQ from './pages/FAQ/FAQ';
import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';
import ProtectedRoute from './ProtectedRoute';
import Landing from './components/Landing';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/FAQ' element={<FAQ />} />

        {/* Protected routes */}
        <Route path='/Home' element={
          <ProtectedRoute><Home /></ProtectedRoute>
        } />
        <Route path='/coin/:coinId' element={
          <ProtectedRoute><Coin /></ProtectedRoute>
        } />
        <Route path='/features' element={
          <ProtectedRoute><Features /></ProtectedRoute>
        } />
        <Route path='/pricing' element={
          <ProtectedRoute><Pricing /></ProtectedRoute>
        } />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;


