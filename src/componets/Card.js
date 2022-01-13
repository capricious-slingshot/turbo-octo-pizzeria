import CardMenuSection from './CardMenuSection'
import CardMenuTable from './CardMenuTable'

export default function Card(props) {

  const menu = props.data

  let isOpen = (menu.dataTarget === 'pizza') ? "show" : ""
  let menuType = (menu.dataTarget === 'taps') ? <CardMenuTable data={menu.tableRowItems} /> : menu.sections.map((section, index) => <CardMenuSection key={index} data={section} />)

  return (
    <div className="card">
      <div className="card-header">
        <h4><button className="card-accordion-anchor" data-toggle="collapse" data-target={`#${menu.dataTarget}`}>{ menu.title }</button></h4>
        <div className={`collapse ${isOpen}`} id={ menu.dataTarget } data-parent="#accordion">
          <div className="card-body col-12 overflow" id={`#${menu.dataTarget}-card`}>
            <div className={`cotainer overlay-${menu.dataTarget} box-padding`}>
              <p>{menu.description}</p>
              {menuType}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}