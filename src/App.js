import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Error404 from './pages/Error404';
import AssignmentProject from './pages/assignment/AssignmentProject';
import Footer from './components/footer/Footer';
import DesktopProject from './pages/forDesktop/DesktopProject';
import Internship from './components/Internship/Internship';

const App = () => {
    return (
        <>
        <Navbar />
        <Routes>
      <Route  path = "/" element = {<Home />} />
      <Route  path = "/webapp" element = {<Home />} />
      <Route  path = "/about" element = {<About />} />
      <Route  path = "/project" element = {<Project />} />
      <Route  path = "/internship_project" element = {<Internship />} />
      <Route  path = "/assignment_project" element = {<AssignmentProject/>} />
      <Route  path = "/desktop_project" element = {<DesktopProject/>} />
      <Route  path = "*" element = {<Error404 />} />
      </Routes> 
      <Footer />
        </>
    )
}

export default App;
