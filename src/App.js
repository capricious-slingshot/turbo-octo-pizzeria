import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.scss'
//verify in node-modules, then import
//lookup google font assets and possibly download
//probbably wont need bootstrap.js, but check
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