import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact'
import Menu from './components/Menu'
import About from './components/About'
import Login from './components/Login';
import Register from './components/Register';
import UploadMenuData from './components/uploadmenudata';
import AdminSetup from './components/AdminSetup';
import Navbar from './components/Navbar';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <BrowserRouter basename="/B.Laban">
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/upload' element={<UploadMenuData />} />
        <Route path='/admin-setup' element={<AdminSetup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
