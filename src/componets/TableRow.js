import { Component } from 'react'

class TableRow extends Component{
  constructor(props) {
    super(props)
    this.tapNumber = props.tapNumber
    this.brewery = props.brewery
    this.beerName = props.beerName
    this.abv = props.abv
    this.state = props.state
    this.ounces = props.ounces
  }

  render() {
    return (
      <tr>
        <th>{ this.tapNumber }</th>
        <th>{ this.brewery }</th>
        <th>{ this.beerName }</th>
        <th>{ this.abv }</th>
        <th>{ this.state }</th>
        <th>{ this.ounces }</th>
      </tr>
    )
  }
}

export default TableRow