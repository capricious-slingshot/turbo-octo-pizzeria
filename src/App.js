// TODOs:
// baseline up and running:
// () images file strucutre? background images not being loaded for accordian. I'm missunderstanding something dumb.

// version 1: using plains json props and state:
// (X) populate accordian from plain json - question about file structure here
// building out admin page
// understanding basic crud at this level with state and props for admin page
  //  (X) read
  //  () update
  //  () delete
  //  () create

// version 2: redux
// 1: understanding reducers and populating accordian with redux
// 2: understanding basic crud at this level

//version 3: hooks
// 1: using hooks and functional programing instead of redux
// 2: understanding basic crud at this level

// whip up a blog post to articulate the differences


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-social/bootstrap-social.css'
import 'font-awesome/css/font-awesome.min.css'
import './styles/application.scss'
import './fonts/Gruppo/Gruppo-Regular.ttf'
import './fonts/Raleway/Raleway-VariableFont_wght.ttf'
import 'bootstrap/dist/js/bootstrap.js'

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Body from './components/Body'
import Main from './components/Main'
import AdminBody from './components/admin/AdminBody'

export default function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Body />} />
      <Route exact path='/admin' element={<Main view={<AdminBody slug="pizzas"/>} />} />
      <Route exact path='/admin/pizzas/edit' element={<Main view={<AdminBody slug="pizzas"/>} />} />
      <Route exact path='/admin/microbrews/edit' element={<Main view={<AdminBody slug="microbrews" />} />} />
      <Route exact path='/admin/calzoni/edit' element={<Main view={<AdminBody slug="calzoni" />} />} />
      <Route exact path='/admin/appetizers/edit' element={<Main view={<AdminBody slug="appetizers"/>} />} />
      <Route exact path='/admin/salads/edit' element={<Main view={<AdminBody slug="salads" />} />} />
      <Route exact path='/admin/wines/edit' element={<Main view={<AdminBody slug="wines" />} />} />
      <Route exact path='/admin/gelato/edit' element={<Main view={<AdminBody slug="gelato" />} />} />
      <Route exact path='/admin/nonAlcoholic/edit' element={<Main view={<AdminBody slug="nonAlcoholic" />} />} />
    </Routes>
  )
}