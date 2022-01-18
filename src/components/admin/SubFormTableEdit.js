import { Component } from 'react'

class SubFormTableEdit extends Component{
//Questions:
  // look at callbacks
  // look at validations

  render() {
    const id = this.props.data.id

    return (
      <>
        <div className="form-group row">
          <label htmlFor={`brewery${id}`} className="col-sm-1 col-form-label">Brewery</label>
          <div className="col-sm-3">
            <input type="text" name='brewery' id={`brewery${id}`} className="form-control" value={this.props.data["brewery"]} onChange={this.props.handleTableChange(this)} />
          </div>
          <label htmlFor={`beerName${id}`} className="col-sm-1 col-form-label">Beer Name</label>
          <div className="col-sm-3">
            <input type="text" name='beerName' id={`beerName${id}`} className="form-control" value={this.props.data["beerName"]} onChange={this.props.handleTableChange(this)} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor={`abv${id}`} className="col-sm-1 col-form-label">Abv</label>
          <div className="col-sm-3">
            <input type="text" name='abv' id={`abv${id}`} className="form-control" value={this.props.data["abv"]} onChange={this.props.handleTableChange(this)} />
          </div>
          <label htmlFor={`state${id}`} className="col-sm-1 col-form-label">State</label>
          <div className="col-sm-3">
            <input type="text" name='state' id={`state${id}`} className="form-control" value={this.props.data["state"]} onChange={this.props.handleTableChange(this)} />
          </div>
          <label htmlFor={`ounces${id}`} className="col-sm-1 col-form-label">Ounces</label>
          <div className="col-sm-3">
            <input type="text" name='ounces' id={`ounces${id}`} className="form-control" value={this.props.data["ounces"]} onChange={this.props.handleTableChange(this)} />
          </div>
        </div>
      </>
    )
  }
}

export default SubFormTableEdit



