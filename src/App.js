import React from 'react';
import './App.css';
import {  BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

import Contact from './components/Contact';

function App() {
  return (
   <>
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" Component={About}/>
       <Route path="/experience" Component={Experience}/>
       <Route path="/projects" Component={Projects}/>
       <Route path="/skills" Component={Skills}/>
       <Route path="/contact" Component={Contact}/>
     </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
