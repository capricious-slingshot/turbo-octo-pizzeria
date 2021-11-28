import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-social/bootstrap-social.css'
import 'font-awesome/css/font-awesome.min.css'
import './styles/application.scss'
import './fonts/Gruppo/Gruppo-Regular.ttf'
import './fonts/Raleway/Raleway-VariableFont_wght.ttf'
// import ovenFire from './img/ovenFire.png'
//probbably wont need bootstrap.js, but check -- ?? I don't think so?

import Header from './componets/Header'
import Main from './componets/Main'
import Footer from './componets/Footer'

export default function App(){
  return (
    <>
      <Header />
      <Main />
      <Footer phone={"206 - 269 - 2222"} streetAddress={"401 Cedar St"} city={"Seattle, WA 98121"} />
    </>
  )
}