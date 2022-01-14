// TODOs:
// baseline up and running: 
// () images file strucutre? background images not being loaded for accordian. I'm missunderstanding something dumb.

// version 1: using plains json props and state:
// (X) populate accordian from plain json - question about file structure here
// () understanding basic crud at this level with state and props

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
import AccordianEdit from './componets/edit/AccordianEdit'
import TableEdit from './componets/edit/TableEdit'

export default function App() {
  //should state and fetch be called from here and passed around?
  return (
    <Routes>
      <Route exact path='/' element={<Body />} />
      <Route exact path='/pizza/edit' element={<Main view={<AccordianEdit />} />} />
      <Route exact path='/microbrews/edit' element={<Main view={<TableEdit />} />} />
      <Route exact path='/calzoni/edit' element={<Main view={<AccordianEdit />} />} />
      <Route exact path='/appetizers/edit' element={<Main view={<AccordianEdit />} />} />
      <Route exact path='/salads/edit' element={<Main view={<AccordianEdit />} />} />
      <Route exact path='/wine/edit' element={<Main view={<AccordianEdit />} />} />
      <Route exact path='/gelato/edit' element={<Main view={<AccordianEdit />} />} />
      <Route exact path='/naDrinks/edit' element={<Main view={<AccordianEdit />} />} />
    </Routes>
  )
}