import { Component } from 'react'

class SubFormTableEdit extends Component{
//Questions:
  // look at callbacks - how do I change state data
  // look at validations

  render() {
    const beer = this.props.data
    const handleItemChange = this.props.handleTableRowChange

    return (
      <>
        <h3 className="text-center tapNumber">Tap {beer.tapNumber}</h3>
        <div className="form-group row">
          <label htmlFor={`brewery${beer.id}`} className="col-sm-1 col-form-label">Brewery</label>
          <div className="col-sm-5">
            <input type="text" name='brewery' id={`brewery${beer.id}`} className="form-control" defaultValue={beer.brewery} onChange={handleItemChange} />
          </div>
          <label htmlFor={`beerName${beer.id}`} className="col-sm-1 col-form-label">Beer Name</label>
          <div className="col-sm-5">
            <input type="text" name='beerName' id={`beerName${beer.id}`} className="form-control" defaultValue={beer.beerName} onChange={handleItemChange} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor={`abv${beer.id}`} className="col-sm-1 col-form-label">Abv</label>
          <div className="col-sm-3">
            <input type="text" name='abv' id={`abv${beer.id}`} className="form-control" defaultValue={beer.abv} onChange={handleItemChange} />
          </div>
          <label htmlFor={`state${beer.id}`} className="col-sm-1 col-form-label">State</label>
          <div className="col-sm-3">
            <input type="text" name='state' id={`state${beer.id}`} className="form-control" defaultValue={beer.state} onChange={handleItemChange} />
          </div>
          <label htmlFor={`ounces${beer.id}`} className="col-sm-1 col-form-label">Ounces</label>
          <div className="col-sm-3">
            <input type="text" name='ounces' id={`ounces${beer.id}`} className="form-control" defaultValue={beer.ounces} onChange={handleItemChange} />
          </div>
        </div>
        <br /><br />
      </>
    )
  }
}

export default SubFormTableEdit