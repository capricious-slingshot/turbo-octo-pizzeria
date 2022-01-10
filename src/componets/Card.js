import { Component } from 'react'
import CardMenuMain from './CardMenuMain'
import CardMenuTable from './CardMenuTable'

class Card extends Component{
  constructor(props) {
    super(props)
    this.dataTarget = props.dataTarget
    this.overlay = props.overlay
    this.title = props.title
    this.description = props.description
  }

  render() {
    let menuType = (this.dataTarget === 'taps') ? <CardMenuTable /> : <CardMenuMain />
    let showSection = (this.dataTarget === 'pizza') ? "show" : ""

    return (
      <div className="card">
        <div className="card-header">
          <h4><button className="card-accordion-anchor" data-toggle="collapse" data-target={`#${this.dataTarget}`}>{ this.title }</button></h4>
          <div className={`collapse ${showSection}`} id={ this.dataTarget }data-parent="#accordion">
            <div className="card-body col-12 overflow" id={`#${this.dataTarget}-card`}>
              <div className={`cotainer overlay-${this.dataTarget} box-padding`}>
                <p>{this.description}</p>
                {menuType}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card