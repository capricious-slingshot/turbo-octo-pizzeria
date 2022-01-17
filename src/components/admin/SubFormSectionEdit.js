import { Component } from 'react'
import SubFormSectionItem from './SubFormItemEdit'

class SubFormSectionEdit extends Component {
  // do I need a callback function to set previous state? how deos this work?
  // do I need a callback function to set handleChange? how deos this work?

  render() {
    const id = this.props.data.id
    const items = this.props.data.items

    return (
      <>
        <hr />
        <div className="form-group row">
          <label htmlFor={`section[${id}]'title']`} className="col-sm-2 col-form-label">Section Title:</label>
          <div className="col-sm-4">
            <input type="text" name={`section[${id}]'title']`} id={`section[${id}]'title']`} className="form-control" value={this.props.data.title} onChange={this.handleChange} />
          </div>
          <label htmlFor={`section[${id}]'colTitle']`} className="col-sm-2 col-form-label">Section SubTitle:</label>
          <div className="col-sm-4">
            <input type="text" name={`section[${id}]'colTitle']`} id={`section[${id}]'colTitle']`} className="form-control" value={this.props.data.colTitle} onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor={`section[${id}]'description']`} className="col-sm-2 col-form-label">Section Description:</label>
          <div className="col-sm-10">
            <input type="text" name={`section[${id}]'description']`} id={`section[${id}]'description']`} className="form-control" value={this.props.data.description} onChange={this.handleChange} />
          </div>
        </div>
        <p>Items:</p>
        {items.map(item => <SubFormSectionItem key={item.id} data={item} />)}
      </>
    )
  }
}

export default SubFormSectionEdit