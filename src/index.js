import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';

import Header from './components/Site/Header';
import Footer from './components/Site/Footer';
import Navigation from './components/Site/Navigation';

import Home from './components/Site/Home';
import About from './components/Site/About';
import Contact from './components/Site/Contact';

import Users from './components/Users/Users';

const Main = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));