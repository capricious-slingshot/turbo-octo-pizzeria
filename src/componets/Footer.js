import {Component} from 'react'

class Footer extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.restaurant = props.restaurant
  }
  
  render() {
    return (
      <div>{this.restaurant} Footer</div>
    )
  }
}

export default Footer