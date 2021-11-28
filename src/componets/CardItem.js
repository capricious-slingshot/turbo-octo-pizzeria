import { Component } from 'react'

class CardItem extends Component{
  constructor(props) {
    super(props)
    this.name = props.name
    this.description = props.description
    this.price = props.price
  }

  render() {
    return (
      <div className="row offset-1">
        <div className="col">
          <h6>{ this.name }</h6>
          <p>{ this.description }</p>
        </div>
        <div className="col-4 col-md-3 col-lg-2 pricing">{ this.price }</div>
      </div>
    )
  }
}

export default CardItem