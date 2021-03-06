import { Component } from 'react'

class MenuSectionItem extends Component {
  render() {
    const itemId = this.props.data.id
    const itemIndex = this.props.index
    const sectionId = this.props.section
    const menuChange = this.props.menuChange

    return (
      <>
        <h3 className="itemNumber">Item {itemIndex + 1}</h3>
        <div className="form-group row">
          <div className="col-sm-6">
            <input type="text" name={`${sectionId}-${itemId}-name`} id={`${sectionId}-${itemId}-name`} className="form-control" placeholder="Item Name Required" defaultValue={this.props.data.name} onChange={menuChange} />
          </div>
          <div className="col-sm-6">
            <input type="text" name={`${sectionId}-${itemId}-price`} id={`${sectionId}-${itemId}-price`} className="form-control" placeholder="Item Price Required" defaultValue={this.props.data.price} onChange={menuChange} />
        </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12">
            <textarea name={`${sectionId}-${itemId}-description`} id={`${sectionId}-${itemId}-description`} rows="3" cols="60" className="form-control" placeholder="Item Description Optional" defaultValue={this.props.data.description} onChange={menuChange}></textarea>
          </div>
        </div>
        <div className="d-flex align-items-end flex-column">
          <button onClick={menuChange} className="btn-xs btn-danger p-2" name={`${sectionId}-${itemId}-delete`} defaultValue={itemId}>Delete Item</button>
        </div>
      </>
    )
  }
}

export default MenuSectionItem