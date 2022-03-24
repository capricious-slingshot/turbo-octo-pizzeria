import { Component } from 'react'

class MenuSectionItem extends Component {
  render() {
    const id = this.props.data.id
    const handleChange = this.props.handleChange
    const removeItem = this.props.removeItem

    return (
      <>
        <h3 className="itemNumber">Item {id + 1}</h3>
        <div className="form-group row">
          <div className="col-sm-6">
            <input type="text" name={`[${id}]['name']`} id={`[${id}]['name']`} className="form-control" placeholder="Item Name Required" defaultValue={this.props.data.name} onChange={handleChange} />
          </div>
          <div className="col-sm-6">
            <input type="text" name={`[${id}]['price']`} id={`[${id}]['price']`} className="form-control" placeholder="Item Price Required" defaultValue={this.props.data.price} onChange={handleChange} />
        </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12">
            <textarea name={`[${id}]['description']`} id={`[${id}]['description']`} rows="3" cols="60" className="form-control" placeholder="Item Description Optional" defaultValue={this.props.data.description} onChange={handleChange}></textarea>
          </div>
        </div>
        <div className="d-flex align-items-end flex-column">
          <button onClick={removeItem} className="btn-xs btn-danger p-2">Delete Item</button>
        </div>
      </>
    )
  }
}

export default MenuSectionItem