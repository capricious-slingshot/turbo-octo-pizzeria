import { Component } from 'react'
import SubFormTableEdit from './SubFormTableEdit'
import SubFormSectionEdit from './SubFormSectionEdit'

class MainEdit extends Component {
  // Questions:
  // further abstract the fetch function? seperate component?

  //deriving state from props is anti-pattern
  state = {
    isFetching: false,
    menu: {}
  }

  subFormComponentType() {
 
    if (this.state.menu && this.state.menu.subMenuArray) {
      return this.state.menu.subMenuArray.map(menu => (this.props.slug === "microbrews") ? <SubFormTableEdit data={menu} /> : <SubFormSectionEdit data={menu} />)
    }
    // empty that doesn't meet criteria
    return null
  }

  async fetchData() {
    const slug = this.props.slug
    this.setState({ isFetching: true })    
    
    await fetch(`http://localhost:3001/${slug}`)
      .then(data => data.json())
      .then((data) => { this.setState({ menu: data }) })
      .catch(error => console.log(error))

    this.setState({ isFetching: false })
  }

  componentDidMount() {
    this.fetchData()
  }

  handleChange = (e) => {
    this.setState(this.state.menu[e.target.name], e.target.value)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    //fetch post
  }

  render() {
    if (this.state.isFetching) {
      return <h1 className="text-center mt-5">Fetching Menu....</h1>
    }

    return (
      <>
        <h1 className="text-center mt-5">Edit {this.state.menu["title"]} Menu</h1>
        <form onSubmit={this.previewModal} id="editMenu">
          <div className="form-group row">
            <label htmlFor="title" className="col-sm-2 col-form-label">Menu Title:</label>
            <div className="col-sm-10">
              <input type="text" name="menu['title']" id="title" className="form-control" value={this.state.menu["title"]} onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group row">
             <label htmlFor="description" className="col-sm-2 col-form-label align-top">Menu Description:</label>
            <div className="col-sm-10">
              <textarea name="description" id="menu['description']" rows="6" cols="60" className="form-control" value={this.state.menu["description"]} onChange={this.handleChange}></textarea>
            </div>
          </div>
          {this.subFormComponentType()}
          <hr />
          <div className="d-flex align-items-end flex-column">
            <input type="submit" className="btn btn-primary p-2" data-toggle="modal" data-target="#previewModal" value="Save" />
          </div>
        </form>
      </>
    )
  }
}

export default MainEdit



