import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Error404 from './pages/Error404';

const App = () => {
    return (
        <>
        <Navbar />
        <Routes>
      <Route  path = "/" element = {<Home />} />
      <Route  path = "/My-Portfolio-live" element = {<Home />} />
      <Route  path = "/about" element = {<About />} />
      <Route  path = "/project" element = {<Project />} />
      <Route  path = "*" element = {<Error404 />} />
      </Routes> 
        </>
    )
}

export default App;
