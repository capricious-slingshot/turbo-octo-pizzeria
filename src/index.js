import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './fonts/Gruppo/Gruppo-Regular.ttf'
import './fonts/Raleway/Raleway-VariableFont_wght.ttf'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)