import { Component } from 'react'
import SubFormSectionItem from './SubFormItemEdit'

class SubFormSectionEdit extends Component {
  // do I need a callback function to set previous state? how deos this work?
  // do I need a callback function to set handleChange? how deos this work?

  render() {
    const section = this.props.data
    const items = this.props.data.items
    const handleSectionChange = this.props.handleChange
    // const handleSectionChange = this.props.handleChange.bind(this)  //nope
    // const handleSectionChange = (e) => this.props.handleChange  //nope

    return (
      <>
        <hr />
        <div className="form-group row">
          <label htmlFor={`section[${section.id}]'title']`} className="col-sm-2 col-form-label">Section Title:</label>
          <div className="col-sm-4">
            <input type="text" name={`section[${section.id}]'title']`} id={`section[${section.id}]'title']`} className="form-control" defaultValue={section.title} onChange={handleSectionChange} />
          </div>
          <label htmlFor={`section[${section.id}]'colTitle']`} className="col-sm-2 col-form-label">Section SubTitle:</label>
          <div className="col-sm-4">
            <input type="text" name={`section[${section.id}]'colTitle']`} id={`section[${section.id}]'colTitle']`} className="form-control" defaultValue={section.colTitle} onChange={handleSectionChange} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor={`section[${section.id}]'description']`} className="col-sm-2 col-form-label">Section Description:</label>
          <div className="col-sm-10">
            <input type="text" name={`section[${section.id}]'description']`} id={`section[${section.id}]'description']`} className="form-control" defaultValue={section.description} onChange={handleSectionChange} />
          </div>
        </div>
        <p>Items:</p>
        {items.map(item => <SubFormSectionItem key={item.id} data={item} />)}
      </>
    )
  }
}

export default SubFormSectionEdit