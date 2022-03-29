// Questions:
  // - where do helper methods live? are they private? external files? what's the file structure?
  // - what is next step? feild input validation? posting to DB via fetch?

import { Component } from 'react'
import MenuTableEdit from './MenuTableEdit'
import MenuSectionEdit from './MenuSectionEdit'

class MenuEdit extends Component {

  //deriving state from props is anti-pattern
  state = {
    isFetching: false,
    menu: {}
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

  parseInputData(name) {
    return name.split('-')
  }

  //callback functions
  menuChangeHandler = (e) => {
    const menu = this.state.menu

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
    const inputData = this.parseInputData(e.target.name)
    const sectionId = inputData[0]
    const itemId = inputData[1]
    const actionMethod = inputData[2]
    const menu = this.state.menu

    // finds item by id
    let menuItem = menu.subMenus[sectionId].items.find(i => i.id === parseInt(itemId, 10))

    if (actionMethod === 'delete' ) {
      // filters found item out of items
      menu.subMenus[inputData[0]].items = menu.subMenus[inputData[0]].items.filter(item => item.id !== menuItem.id)
    } else {
      // resets value
      menuItem[actionMethod] = e.target.value
    }

    this.setState({ menu })
  }

  // removeMenuItemHandler = (e) => {
  //   const itemData = this.parseInputData(e.target.name)
  //   const menu = this.state.menu
    
  //   // finds item by id
  //   const menuItem = menu.subMenus[itemData[0]].items.find(i => i.id === parseInt(itemData[1], 10))

    
  //   this.setState({ menu })
  // }

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
    let menuComponentType
    if (this.state.menu && this.state.menu.subMenus) {
      menuComponentType = this.state.menu.subMenus.map(menu => {
        if (this.props.slug === "microbrews") {
          return <MenuTableEdit key={menu.id} data={menu} tableRowChange={this.menuTableChangeHandler} />
        } else {
          return <MenuSectionEdit key={menu.id} data={menu} fieldChange={this.menuSectionChangeHandler} itemFieldChange={this.menuSectionItemChangeHandler} removeMenuItem={this.removeMenuItemHandler}/>
        }
      })
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
          { menuComponentType }
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