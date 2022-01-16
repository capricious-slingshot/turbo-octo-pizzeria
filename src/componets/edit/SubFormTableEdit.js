import { Component } from 'react'

class SubFormTableEdit extends Component{
//Questions:
  
  render() {
    const id = this.props.data.id

    return (
      <>
        <div className="form-group row">
          <label htmlFor={`data[${id}]'brewery']`} className="col-sm-1 col-form-label">Brewery</label>
          <div className="col-sm-3">
            <input type="text" name={`data[${id}]'brewery']`} id={`data[${id}]'brewery']`} className="form-control" value={this.props.data["brewery"]} onChange={this.handleChange} />
          </div>
          <label htmlFor={`data[${id}]'beerName']`} className="col-sm-1 col-form-label">Beer Name</label>
          <div className="col-sm-3">
            <input type="text" name={`data[${id}]'beerName']`} id={`data[${id}]'beerName']`} className="form-control" value={this.props.data["beerName"]} onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor={`data[${id}]'abv']`} className="col-sm-1 col-form-label">Abv</label>
          <div className="col-sm-3">
            <input type="text" name={`data[${id}]'abv']`} id={`data[${id}]'abv']`} className="form-control" value={this.props.data["abv"]} onChange={this.handleChange} />
          </div>
          <label htmlFor={`data[${id}]'state']`} className="col-sm-1 col-form-label">State</label>
          <div className="col-sm-3">
            <input type="text" name={`data[${id}]'state']`} id={`data[${id}]'state']`} className="form-control" value={this.props.data["state"]} onChange={this.handleChange} />
          </div>
          <label htmlFor={`data[${id}]'ounces']`} className="col-sm-1 col-form-label">Ounces</label>
          <div className="col-sm-3">
            <input type="text" name={`data[${id}]'ounces']`} id={`data[${id}]'ounces']`} className="form-control" value={this.props.data["ounces"]} onChange={this.handleChange} />
          </div>
        </div>
      </>
    )
  }
}

export default SubFormTableEdit



