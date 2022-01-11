import { Component } from 'react'
import CardMenuMain from './CardMenuMain'
import CardMenuTable from './CardMenuTable'

class Card extends Component{

  render() {
    let menuType = (this.props.data.dataTarget === 'taps') ? <CardMenuTable data={this.props.data} /> : <CardMenuMain data={this.props.data} />
    let showSection = (this.props.data.dataTarget === 'pizza') ? "show" : ""
    console.log(this.props.data) //can see promise in browser console
    //all calls to this.props.data.... below just return undefined
    return (
      <div className="card">
        <div className="card-header">
          <h4><button className="card-accordion-anchor" data-toggle="collapse" data-target={`#${this.props.data.dataTarget}`}>{ this.props.data.title }</button></h4>
          <div className={`collapse ${showSection}`} id={ this.props.data.dataTarget } data-parent="#accordion">
            <div className="card-body col-12 overflow" id={`#${this.props.data.dataTarget}-card`}>
              <div className={`cotainer overlay-${this.props.data.dataTarget} box-padding`}>
                <p>{this.props.description}</p>
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