import { Component } from 'react'
import MenuSectionItem from './MenuSectionItemEdit'

// functional component because no state, can use decomposition instead of defiing all of the variables
class MenuSectionEdit extends Component {
  showEmptySection(e){
    document.getElementById('sectionWrapper').classList.remove("d-none")
    document.getElementById('showSectionBttn').classList.add("d-none")
  }

  render() {
    const section = this.props.data
    const items = this.props.data.items
    const menuChange = this.props.menuChange
    const addMenuItem = this.props.addMenuItem
    const sectionPresent = (section.title || section.colTitle || section.sectionDescription) ? true : false
    

    return (
      <>
        <div className={`${sectionPresent ? '' : 'd-none'}`} id="sectionWrapper">
          <hr />
            <h3 className="text-center">{section.title ? section.title : `New Section`}</h3>
          <hr />
          <div className="form-group row">
            <label htmlFor={`${section.id}-title`} className="col-sm-2 col-form-label">Section Title:</label>
            <div className="col-sm-4">
              <input type="text" name={`${section.id}-title`} id={`${section.id}-title`} className="form-control" placeholder="Optional" defaultValue={section.title} onChange={menuChange} />
            </div>
            <label htmlFor={`${section.id}-colTitle`} className="col-sm-2 col-form-label">Section SubTitle:</label>
            <div className="col-sm-4">
              <input type="text" name={`${section.id}-colTitle`} id={`${section.id}-colTitle`} className="form-control" placeholder="Optional" defaultValue={section.colTitle} onChange={menuChange} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor={`${section.id}-description`} className="col-sm-2 col-form-label">Section Description:</label>
            <div className="col-sm-10">
              <input type="text" name={`${section.id}-description`} id={`${section.id}-description`} className="form-control" placeholder="Optional" defaultValue={section.description} onChange={menuChange} />
            </div>
          </div>
        </div>
          <div className="row justify-content-end">
            <div className="col-sm-4 button-wrapper">
              <button onClick={this.showEmptySection} className={`btn-xs btn-success p-2 col-6 ${sectionPresent ? 'd-none' : ''}`} name={`${section.id}-add`} id="showSectionBttn">Show Section Info</button>
              <button onClick={addMenuItem} className="btn-xs btn-warning p-2 col-6" name={`${section.id}-add`}>Add Menu Item</button>
            </div>
          </div>
        {items.map((item, index) => <MenuSectionItem key={item.id} data={item} index={index} section={section.id} menuChange={menuChange} />)}
      </>
    )
  }
}

export default MenuSectionEdit