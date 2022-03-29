// Questions:
  // LifeCycle menuChangeHandler:
    // LifeCycle issue: If two changes to the nested object got batched the last change would overwrite the first:
    // this.setState((prevState) => ({ nested: { ...prevState.nested, propertyToSet: newValue } } - not quite the right syntax

import { Component } from 'react'
import MenuTableEdit from './MenuTableEdit'
import MenuSectionEdit from './MenuSectionEdit'

class MenuEdit extends Component {

  //deriving state from props is anti-pattern
  state = {
    isFetching: false,
    menu: {}
  }

  MenuComponentType() {
    //solves async issue
    if (this.state.menu && this.state.menu.subMenus) {
      return this.state.menu.subMenus.map(menu => (this.props.slug === "microbrews") ? <MenuTableEdit key={menu.id} data={menu} tableRowChange={this.menuTableChangeHandler} /> : <MenuSectionEdit key={menu.id} data={menu} fieldChange={this.menuSectionChangeHandler} itemFieldChange={this.menuSectionItemChangeHandler} removeMenuItem={this.removeMenuItemHandler}/>)
    }
    // catch: if it doesn't meet avove criteria
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

  componentDidUpdate(prevProps) {
    if (this.props.slug !== prevProps.slug) {
      this.fetchData()
    }
  }

  //where do helper functions live? seperate file?
  parseInputData(name) {
    return name.split('-')
  }

  //callback functions
  //QUESTIONS:
      // - where do helper methods live? are they private? external files? what's the file structure?
      // - what is next step? feild input validation? posting to DB via fetch?

  menuChangeHandler = (e) => {
    const menu = {...this.state.menu}
    menu[e.target.name] = e.target.value
    this.setState({ menu })
  }

  menuSectionChangeHandler = (e) => {
    const menu = this.state.menu
    const inputData = this.parseInputData(e.target.name)
    menu.subMenus[inputData[0]][inputData[1]] = e.target.value
    this.setState({ menu })
  }

  menuSectionItemChangeHandler = (e) => {
    const menu = this.state.menu
    const inputData = this.parseInputData(e.target.name)

    //will need to loop with item deletion FIND BY ID
    menu.subMenus[inputData[0]].items[inputData[1]][inputData[2]] = e.target.value
    this.setState({ menu })
  }

  removeMenuItemHandler = (e) => {
    const itemData = this.parseInputData(e.target.getAttribute("name"))
    const menu = this.state.menu
    const items = menu.subMenus[itemData[0]].items
    const menuItem = menu.subMenus[itemData[0]].items[itemData[1]]
    
    menu.subMenus[itemData[0]].items = items.filter(item => item.id !== menuItem.id)
    this.setState({ menu })
  }
  
  menuTableChangeHandler = (e) => {
    console.log(e)
  }

  saveMenuHandler = (e) => {
    e.preventDefault()
    //CUD for menu - and fetch and pass state as single object
    console.log('Ready to save menu')
    //fetch(post menu item)
  }

  render() {
    if (this.state.isFetching) {
      return <h1 className="text-center mt-5">Fetching Menu....</h1>
    }

    const menu = this.state.menu
    return (
      <>
        <form onSubmit={this.saveMenuHandler} id="editMenu">
          <hr />
            <h3 className="text-center itemNumber">{menu.title}</h3>
          <hr />
          <div className="form-group row">
            <label htmlFor="menu['title']" className="col-sm-2 col-form-label">Menu Title:</label>
            <div className="col-sm-10">
              <input type="text" name="title" id="menu['title']" className="form-control" placeholder="Title Required" defaultValue={menu.title} onChange={this.menuChangeHandler} />
            </div>
          </div>
          <div className="form-group row">
             <label htmlFor="menu['description']" className="col-sm-2 col-form-label align-top">Menu Description:</label>
            <div className="col-sm-10">
              <textarea name="description" id="menu['description']" rows="6" cols="60" className="form-control" placeholder="Description Optional" defaultValue={menu.description} onChange={this.menuChangeHandler}></textarea>
            </div>
          </div>
          {this.MenuComponentType()}
          <hr />
          <div className="d-flex align-items-end flex-column">
            <input type="submit" className="btn btn-primary p-2" data-toggle="modal" data-target="#previewModal" value="Save Menu" />
          </div>
        </form>
      </>
    )
  }
}

export default MenuEdit