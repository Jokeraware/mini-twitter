import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Nav from './components/nav';
import Profil from './pages/profil/profil';
import Signup from './pages/signup/signup';

function App() {

  return (

    <BrowserRouter>
    <header>
      <Nav />
    </header>
      <main>
        <Routes >

          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profil' element={<Profil />} />
          <Route path='/signup' element={<Signup />} />

        </Routes>
      </main>
    </BrowserRouter>

  )
}

export default App
