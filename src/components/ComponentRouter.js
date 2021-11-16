import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs/AboutUs';
import Events from './Events/Events';
import Home from './Home/Home';
import Sponsors from './Sponsors/Sponsors';

const ComponentRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={'/aboutUs'} element={<AboutUs />} />
          <Route path={'/sponsors'} element={<Sponsors />} />
          <Route path={'/events'} element={<Events />} />
          <Route path={'/'} element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default ComponentRouter
