import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import ServiceDetails from '../pages/ServiceDetails'
import Team from '../pages/Team'
import Clients from '../pages/Clients'
import { Routes, Route } from 'react-router-dom'
function Routers() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/our-team' element={<Team />} />
            <Route path='/our-clients' element={<Clients />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
            <Route path='/services/:serviceSlug' element={<ServiceDetails />} />
        </Routes>
    </div>
  )
}

export default Routers
