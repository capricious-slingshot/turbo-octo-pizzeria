// Questions:
  // LifeCycle handleChange:
    // LifeCycle issue: If two changes to the nested object got batched the last change would overwrite the first:
    // this.setState((prevState) => ({ nested: { ...prevState.nested, propertyToSet: newValue } } - not quite the right syntax

import { Component } from 'react'
import SubFormTableEdit from './SubFormTableEdit'
import SubFormSectionEdit from './SubFormSectionEdit'

class MenuEdit extends Component {

  //deriving state from props is anti-pattern
  state = {
    isFetching: false,
    menu: {}
  }

  subFormComponentType() {
    //solves async issue
    if (this.state.menu && this.state.menu.subMenuArray) {
      return this.state.menu.subMenuArray.map(menu => (this.props.slug === "microbrews") ? <SubFormTableEdit key={menu.id} data={menu} handleSectionChange={this.handleSectionChange} /> : <SubFormSectionEdit key={menu.id} data={menu} handleTableChange={this.handleTableChange}/>)
    }
    // catch: doesn't meet criteria
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
    console.log(e)
    const menu = {...this.state.menu}
    menu[e.target.name] = e.target.value
    this.setState( prevState => ({ menu }))
  }

  // handleSectionChange = (e) => {
    // console.log(e)  //not currently even hitting method
    // Attempt 1:
    //complete data structure: this.state.menu.subMenuArray[?child.props.key?]['items'][?index?][e.target.name] = e.target.value

    // const menu = {...this.state.menu.subMenuArray}
    // menu[?child.props.key?]['items'][?index?][e.target.name] = e.target.value
    // this.setState( prevState => ({ menu }))

    // how to work with nested components here - callback and complicated naming due to nesting:

    // Attempt 2:
    //need:
    // [child.props.key] - how to get subMenuArray index (or id) - this is passed to child in props, can I pass back as an attribute?
    // [itemIndex] - how to get item index (or id)
    
    // final implementation should look something like this:
    // this.setState(prevState => ({
    //   ...prevState, subMenuArray: {
    //     ...prevState.subMenuArray, [child.props.key]: {
    //       ...prevState.subMenuArray[child.props.key], ['items']: {
    //         ...prevState.subMenuArray[child.props.key]['items'], [itemIndex]: {
    //           ...prevState.subMenuArray[child.props.key]['items'][itemIndex],
    //              [e.target.name]: e.target.value
    //         }
    //       }
    //     }
    //   }
    // })
  // }

  // handleTableChange = (e) => {
    // console.log(e)  //not currently even hitting method

    // this.setState(prevState => ({
    //   ...prevState, subMenuArray: {
    //     ...prevState.subMenuArray, [0]: {
    //       ...prevState.subMenuArray[0],
                // [e.target.name]: e.target.value
    //         }
    //       }
    //     }
    //   }
    // })
    // }

  handleSubmit = (e) => {
    e.preventDefault()
    //fetch post
  }

  render() {
    console.log(this.state.title)
    if (this.state.isFetching) {
      return <h1 className="text-center mt-5">Fetching Menu....</h1>
    }

    const menu = this.state.menu
    return (
      <>
        <form onSubmit={this.handleSubmit} id="editMenu">
          <div className="form-group row">
            <label htmlFor="title" className="col-sm-2 col-form-label">Menu Title:</label>
            <div className="col-sm-10">
              <input type="text" name="title" id="title" className="form-control" value={menu.title} onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group row">
             <label htmlFor="menu['description']" className="col-sm-2 col-form-label align-top">Menu Description:</label>
            <div className="col-sm-10">
              <textarea name="description" id="menu['description']" rows="6" cols="60" className="form-control" value={menu.description} onChange={this.handleChange}></textarea>
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

export default MenuEdit