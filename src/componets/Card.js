import { Component } from 'react'
import CardMenuMain from './CardMenuMain'
import CardMenuTable from './CardMenuTable'

class Card extends Component{

  render() {
    // Question: why can I see the promise in the browser console but not in the template? 
    // I understand the componet is rendering before the server request is complete and that is why I am getting 'undefined', 
    // but then why does console.log lie? Isn't there a better debugging tool than this? It seems cheap and flakey.
    console.log(this.props.data) //can see promise in browser 
    console.log(this.props.data.description) //undefined

    const section = this.props.data
    let menuType = (section.dataTarget === 'taps') ? <CardMenuTable data={this.props.data} /> : <CardMenuMain data={this.props.data} />
    let showSection = (section.dataTarget === 'pizza') ? "show" : ""
    return (
      <div className="card">
        <div className="card-header">
          <h4><button className="card-accordion-anchor" data-toggle="collapse" data-target={`#${section.dataTarget}`}>{ section.title }</button></h4>
          <div className={`collapse ${showSection}`} id={ section.dataTarget } data-parent="#accordion">
            <div className="card-body col-12 overflow" id={`#${section.dataTarget}-card`}>
              <div className={`cotainer overlay-${section.dataTarget} box-padding`}>
                <p>{section.description}</p>
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