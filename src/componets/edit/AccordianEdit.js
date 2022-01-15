import { Component } from 'react'
import SubFormSection from './subFormSectionEdit'

class AccordianEdit extends Component{
  //deriving state from props is anti-pattern

  //Questions:
      // I need to abstract the fetch function - slug needed before the fetch
      // why can't I go down multiple key levels in my menu array?
      // why does this.state.menu['sections'].map not work? same level as menu['title'] and menu['description']

  state = {
    isFetching: false,
    menu: {},
    sections: []
  }

  async fetchData(slug) {
    this.setState({ isFetching: true })
    try {
      const response = await fetch(`http://localhost:3001/${slug}`).then(resp => resp.json()).then(json => {
        this.setState({
          menu: json,
          sections: json.sections,
        })
      })
      if (!response.ok) {
        throw Error(response.statusText)
      }
    } catch (error) {
      console.log(`Error: ${error}`)
    }
    this.setState({ isFetching: false })
  }

  componentDidMount() {
    this.fetchData(this.props.slug)
  }

  handleChange = (e) => {
    this.setState({
      // menu[e.target.name]: e.target.value //dynamic name value
      // menu["title"]: e.target.value
    })
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
          {this.state.sections.map(section => <SubFormSection data={section} />)}
          <hr />
          <div className="d-flex align-items-end flex-column">
            <input type="submit" class="btn btn-primary p-2" data-toggle="modal" data-target="#previewModal" value="Save" />
          </div>
        </form>
      </>
    )
  }
}

export default AccordianEdit



