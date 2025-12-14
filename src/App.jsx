import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './home.jsx';
import Package from './components/package.jsx';
import Projects from './components/projects.jsx';
import Pro from './components/pro.jsx';
import About from './components/about.jsx';
import Services from './components/services.jsx';
import Contact from './components/contact.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/package' element={<Package/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/pro' element={<Pro/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}


export default App
