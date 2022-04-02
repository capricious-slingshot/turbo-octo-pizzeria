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

  parseInputData(data) {
    return data.split('-')
  }

  menuChangeHandler = (e) => {
    const menu = this.state.menu

    // parent component field
    if (menu[e.target.name]) {
      menu[e.target.name] = e.target.value
    } else {
      const inputData = this.parseInputData(e.target.name)
      console.log('data', inputData)
      const sectionId = inputData[0]
      console.log('sectionId', sectionId)
      
      const itemId = parseInt(inputData[1], 10)
      
      if (itemId >= 0) {
        // grandchild component (item)
        const keyName = inputData[2]
        
        // finds item by id
        let menuItem = menu.subMenus[sectionId].items.find(i => i.id === parseInt(itemId, 10))
        
        if (keyName === 'delete' ) {
          // remove item
          menu.subMenus[inputData[0]].items = menu.subMenus[inputData[0]].items.filter(item => item.id !== menuItem.id)
        } else {
          // resets value
          menuItem[keyName] = e.target.value
        }
      } else {
        //child component field (section)
        const sectionKey = inputData[1]

        menu.subMenus[sectionId][sectionKey] = e.target.value
      }
    }

    this.setState({ menu })
  }

  addMenuItem = (e) => {
    const menuSection = this.state.menu.subMenus
    const sectionId = parseInt(this.parseInputData(e.target.name)[0], 10)
    const newItemId = menuSection[sectionId].items.length  //this will change when hooked up to db

    menuSection[sectionId].items.push({"id": newItemId,"name": null,"description": null,"price": null})
    this.setState({ menuSection })
  }

  addMenuSection = (e) => {
    const menu = this.state.menu
    const newId = this.state.menu.subMenus.length  //this will change when hooked up to db

    menu.subMenus.push({ "id": newId, "title": null, "colTitle": null, "sectionDescription": null, "items": []})
    this.setState({ menu })
  }

  showEmptySection = (e) => {

  }

  menuTableChangeHandler = (e) => {
    console.log(e)
  }

  saveMenuHandler = (e) => {
    //why does this fire when state is updated via non-submit button?
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
          return <MenuTableEdit key={menu.id} data={menu} tableRowChange={this.menuTableChangeHandler} addMenuItem={this.addMenuItem} />
        } else {
          return <MenuSectionEdit key={menu.id} data={menu} menuChange={this.menuChangeHandler} addMenuItem={this.addMenuItem}/>
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
          <div className="form-group row">
            <div className="d-flex align-items-end flex-column">
              <button onClick={this.addMenuSection} className="btn-xs btn-info p-2">Add Menu Section</button>
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