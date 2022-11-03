import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  return (
    <Box width="400px" sx={{ width: {xl: '1400px'}}} m='auto'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/recipe/:id" element={<Recipe/>}/>
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App;