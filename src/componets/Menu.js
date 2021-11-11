import {Component} from 'react'

class Menu extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.restaurant = props.restaurant
  }
  
  render() {
    return (
      <div>{this.restaurant} Menu</div>
    )
  }
}

export default Menu