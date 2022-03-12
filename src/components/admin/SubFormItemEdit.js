import { Component } from 'react'

class SubFormItemEdit extends Component {
  render() {
    const id = this.props.data.id
    const handleChange = this.props.handleChange
    return (
      <>
        <div className="form-group row">
          <div className="col-sm-6">
            <input type="text" name={`[${id}]['name']`} id={`[${id}]['name']`} className="form-control" defaultValue={this.props.data.name} onChange={handleChange} />
          </div>
          <div className="col-sm-6">
            <input type="text" name={`[${id}]['price']`} id={`[${id}]['price']`} className="form-control" defaultValue={this.props.data.price} onChange={handleChange} />
        </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12">
            <textarea name={`[${id}]['description']`} id={`[${id}]['description']`} rows="3" cols="60" className="form-control" defaultValue={this.props.data.description} onChange={handleChange}></textarea>
          </div>
        </div>
        <br /><br />
      </>
    )
  }
}

export default SubFormItemEdit