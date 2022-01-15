// TODOs:
// baseline up and running: 
// () images file strucutre? background images not being loaded for accordian. I'm missunderstanding something dumb.

// version 1: using plains json props and state:
// (X) populate accordian from plain json - question about file structure here
// understanding basic crud at this level with state and props
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
import Main from './componets/Main'
import Body from './componets/Body'
import MenuEdit from './componets/edit/MenuEdit'

export default function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Body />} />
      <Route exact path='/pizzas/edit' element={<Main view={<MenuEdit slug="pizzas"/>} />} />
      <Route exact path='/microbrews/edit' element={<Main view={<MenuEdit slug="microbrews" />} />} />
      <Route exact path='/calzoni/edit' element={<Main view={<MenuEdit slug="calzoni" />} />} />
      <Route exact path='/appetizers/edit' element={<Main view={<MenuEdit slug="appetizers"/>} />} />
      <Route exact path='/salads/edit' element={<Main view={<MenuEdit slug="salads" />} />} />
      <Route exact path='/wines/edit' element={<Main view={<MenuEdit slug="wines" />} />} />
      <Route exact path='/gelato/edit' element={<Main view={<MenuEdit slug="gelato" />} />} />
      <Route exact path='/nonAlcoholic/edit' element={<Main view={<MenuEdit slug="nonAlcoholic" />} />} />
    </Routes>
  )
}