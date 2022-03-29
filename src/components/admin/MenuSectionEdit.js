import { Component } from 'react'
import MenuSectionItem from './MenuSectionItemEdit'

// functional component because no state, can use decomposition instead of defiing all of the variables
class MenuSectionEdit extends Component {

  render() {
    const section = this.props.data
    const items = this.props.data.items
    const fieldChange = this.props.fieldChange
    const itemFieldChange = this.props.itemFieldChange
    const removeMenuItem = this.props.removeMenuItem

    return (
      <>
        <hr />
        <h3 className="text-center">{section.title ? section.title : `Section ${section.id + 1}`}</h3>
        <hr />
        <div className="form-group row">
          <label htmlFor={`${section.id}-title`} className="col-sm-2 col-form-label">Section Title:</label>
          <div className="col-sm-4">
            <input type="text" name={`${section.id}-title`} id={`${section.id}-title`} className="form-control" placeholder="Optional" defaultValue={section.title} onChange={fieldChange} />
          </div>
          <label htmlFor={`${section.id}-colTitle`} className="col-sm-2 col-form-label">Section SubTitle:</label>
          <div className="col-sm-4">
            <input type="text" name={`${section.id}-colTitle`} id={`${section.id}-colTitle`} className="form-control" placeholder="Optional" defaultValue={section.colTitle} onChange={fieldChange} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor={`${section.id}-description`} className="col-sm-2 col-form-label">Section Description:</label>
          <div className="col-sm-10">
            <input type="text" name={`${section.id}-description`} id={`${section.id}-description`} className="form-control" placeholder="Optional" defaultValue={section.description} onChange={fieldChange} />
          </div>
        </div>
        {items.map((item, index) => <MenuSectionItem key={item.id} data={item} index={index} section={section.id} itemFieldChange={itemFieldChange} />)}
      </>
    )
  }
}

export default MenuSectionEdit