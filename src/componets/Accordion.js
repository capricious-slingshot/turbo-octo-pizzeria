import { Component } from 'react'
import Card from './Card'

//is there a classier alternative to console.log? it's awful

//pass to children
  //issues with child consuming data - can't hit props. it just barfs.
  //how can i even look at props ?

class Accordion extends Component {
  constructor() {
    super()
    this.pizzas = this.fetchData("pizzas")
    this.microbrews = this.fetchData("microbrews")
    this.appetizers = this.fetchData("appetizers")
    this.calzoni = this.fetchData("calzoni")
    this.salads = this.fetchData("salads")
    this.wines = this.fetchData("wines")
    this.gelato = this.fetchData("gelato")
    this.nonalcholic = this.fetchData("nonalcholic")
  }

  fetchData(route) {
    const baseUrl = 'http://localhost:3001/'
    return fetch(baseUrl+route).then(response => response.json()).catch(err => console.log('There was an error:' + err))
  }

  render() {
    return (
      <div className="accordion accordion-flush" id="accordion">
        {<Card data={this.pizzas} />}
      </div>
    )
  }
}

export default Accordion