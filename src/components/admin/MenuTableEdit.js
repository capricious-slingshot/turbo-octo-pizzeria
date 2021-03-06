import { Component } from 'react'

class MenuTableEdit extends Component{
//Questions:
  // look at callbacks - how do I change state data
  // look at validations

  render() {
    const beer = this.props.data
    const tableRowChange = this.props.tableRowChange

    return (
      <>
        <h3 className="itemNumber">Tap {beer.tapNumber}</h3>
        <div className="form-group row">
          <label htmlFor={`brewery${beer.id}`} className="col-sm-1 col-form-label">Brewery</label>
          <div className="col-sm-5">
            <input type="text" name='brewery' id={`brewery${beer.id}`} className="form-control" defaultValue={beer.brewery} onChange={tableRowChange} />
          </div>
          <label htmlFor={`beerName${beer.id}`} className="col-sm-1 col-form-label">Name</label>
          <div className="col-sm-5">
            <input type="text" name='beerName' id={`beerName${beer.id}`} className="form-control" defaultValue={beer.beerName} onChange={tableRowChange} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor={`abv${beer.id}`} className="col-sm-1 col-form-label">Abv</label>
          <div className="col-sm-3">
            <input type="text" name='abv' id={`abv${beer.id}`} className="form-control" defaultValue={beer.abv} onChange={tableRowChange} />
          </div>
          <label htmlFor={`state${beer.id}`} className="col-sm-1 col-form-label">State</label>
          <div className="col-sm-3">
            <input type="text" name='state' id={`state${beer.id}`} className="form-control" defaultValue={beer.state} onChange={tableRowChange} />
          </div>
          <label htmlFor={`ounces${beer.id}`} className="col-sm-1 col-form-label">Ounces</label>
          <div className="col-sm-3">
            <input type="text" name='ounces' id={`ounces${beer.id}`} className="form-control" defaultValue={beer.ounces} onChange={tableRowChange} />
          </div>
        </div>
        <br /><br />
      </>
    )
  }
}

export default MenuTableEdit