import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-social/bootstrap-social.css'
import 'font-awesome/css/font-awesome.min.css'
import './styles/application.scss'
import './fonts/Gruppo/Gruppo-Regular.ttf'
import './fonts/Raleway/Raleway-VariableFont_wght.ttf'
//probbably wont need bootstrap.js, but check -- ?? I don't think so?
import Main from './componets/Main'
import { Routes, Route } from 'react-router-dom'
import Header from './componets/Header'
import Footer from './componets/Footer'
import Accordion from './componets/Accordion'
import MicrobrewEdit from './componets/MicrobrewEdit'
import WineEdit from './componets/WineEdit'
import React from 'react'

function Menu() {
  return (
    <>
      <Header />
      <Main view={<Accordion />} />
      <Footer phone={"206 - 269 - 2222"} streetAddress={"401 Cedar St"} city={"Seattle, WA 98121"} />
    </>
  )
}

export default function App() {
  
  return (
    <Routes>
      <Route exact path='/' element={ <Menu />} />
      <Route exact path='/microbrews/edit' element={<Main view={<MicrobrewEdit />} />} />
      <Route exact path='/wine/edit' element={<Main view={<WineEdit />} />} />
    </Routes>
  )
}