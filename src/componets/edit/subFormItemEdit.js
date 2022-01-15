import { Component } from 'react'

class subFormItemEdit extends Component {
  render() {
    const id = this.props.data.id
    return (
      <>
        <div className="form-group row">
          <div className="col-sm-6">
            <input type="text" name={`item[${id}]'name']`} id={`item[${id}]'name']`} className="form-control" value={this.props.data.name} onChange={this.handleChange} />
          </div>
          <div className="col-sm-6">
            <input type="text" name={`item[${id}]'price']`} id={`item[${id}]'price']`} className="form-control" value={this.props.data.price} onChange={this.handleChange} />
        </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12">
            <textarea name={`item[${id}]'description']`} id={`item[${id}]'description']`} rows="3" cols="60" className="form-control" value={this.props.data.description} onChange={this.handleChange}></textarea>
          </div>
        </div>
        <br /><br />
      </>
    )
  }
}

export default subFormItemEdit