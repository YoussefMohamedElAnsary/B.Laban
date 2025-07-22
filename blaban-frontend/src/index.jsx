import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter basename="/B.Laban">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/upload' element={<UploadMenuData/>}/>
        <Route path='/admin-setup' element={<AdminSetup/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
