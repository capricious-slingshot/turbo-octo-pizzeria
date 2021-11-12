import { Component } from 'react'

class Logo extends Component{
  constructor(props) {
    super(props)
    console.log(props)
    this.streetAddress = props.streetAddress
    this.phone = props.phone
  }

  render(){
    return(
      <div className="col" id="headerInfo">
        <h4 className="text-center text-white">Everyday Noon - 9pm</h4>
        <h5 className="text-center text-white">Happy Hour 4 - 6</h5>
        <h6 className="text-center text-white"><a href="tel:206-269-2222" className="phoneContact">{this.streetAddress} &nbsp; &nbsp; {this.phone}</a></h6>
      </div>
    )
  }
}

 export default Logo