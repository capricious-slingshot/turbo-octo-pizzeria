import {Component} from 'react'
// import { x,y,z  } from 'react-bootstrap';

class Header extends Component{
  constructor(props) {
    super(props)
    console.log(props)
    this.restaurant = props.restaurant
  }

  render() {
    return (
      <div>{this.restaurant} Header</div>
    )
  }
}

export default Header