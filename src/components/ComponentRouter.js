import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs/AboutUs';
import Events from './Events/Events';
import Home from './Home/Home';
import Sponsors from './Sponsors/Sponsors';
import Team from './Team/Team';

const ComponentRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={'/aboutUs'} element={<AboutUs />} />
          <Route path={'/sponsors'} element={<Sponsors />} />
          <Route path={'/events'} element={<Events />} />
          <Route path={'/teams'} element={<Team />} />
          <Route path={'/'} element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default ComponentRouter
