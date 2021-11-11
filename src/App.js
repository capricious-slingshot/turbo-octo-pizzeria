import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componets/Header'
import Menu from './componets/Menu'
import Footer from './componets/Footer'

class App extends React.Component{
  render() {
    return (
      <>
        <Header restaurant={"Bambinos"} />
        <Menu restaurant={"Bambinos"}/>
        <Footer restaurant={"Bambinos"}/>
      </>
    )
  }
}

export default App
