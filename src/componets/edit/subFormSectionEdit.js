import { Component } from 'react'

class subFormSectionEdit extends Component {
  // do I need a call back function to set previous state?
  // this.props.data.items.map(item => <subFormItem data={item} />
  render() {
    return (
      <>
        <div className="form-group row">
          <label htmlFor="sectionTitle" className="col-sm-2 col-form-label">Section Title:</label>
          <div className="col-sm-4">
            <input type="text" name="section1['title']" id="sectionTitle" className="form-control" value={this.props.data.title} onChange={this.handleChange} />
          </div>
          <label htmlFor="sectionColTitle" className="col-sm-2 col-form-label">Section SubTitle:</label>
          <div className="col-sm-4">
            <input type="text" name="section['colTitle']" id="sectionColTitle" className="form-control" value={this.props.data.colTitle} onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="sectionDescription" className="col-sm-2 col-form-label">Section Description:</label>
          <div className="col-sm-10">
            <input type="text" name="section['description']" id="sectionDescription" className="form-control" value={this.props.data.description} onChange={this.handleChange} />
          </div>
        </div>
        <p>Items:</p>
        
      </>
    )
  }
}

export default subFormSectionEdit