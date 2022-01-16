import CardMenuSection from './CardMenuSection'
import CardMenuTable from './CardMenuTable'

export default function Card(props) {

  const {dataTarget, title, description, subMenuArray}= props.data

  let isOpen = (dataTarget === 'pizza') ? "show" : ""
  let menuType = (dataTarget === 'taps') ? <CardMenuTable data={subMenuArray} /> : subMenuArray.map((section, index) => <CardMenuSection key={index} data={section} />)

  return (
    <div className="card">
      <div className="card-header">
        <h4><button className="card-accordion-anchor" data-toggle="collapse" data-target={`#${dataTarget}`}>{ title }</button></h4>
        <div className={`collapse ${isOpen}`} id={ dataTarget } data-parent="#accordion">
          <div className="card-body col-12 overflow" id={`#${dataTarget}-card`}>
            <div className={`cotainer overlay-${dataTarget} box-padding`}>
              <p>{description}</p>
              {menuType}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}