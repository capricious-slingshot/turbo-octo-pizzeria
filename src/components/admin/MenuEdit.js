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
      return this.state.menu.subMenus.map(menu => (this.props.slug === "microbrews") ? <MenuTableEdit key={menu.id} data={menu} tableRowChange={this.menuTableChangeHandler} /> : <MenuSectionEdit key={menu.id} data={menu} fieldChange={this.menuSectionChangeHandler} removeMenuItem={this.removeMenuItemHandler}/>)
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

  //callback functions

  menuChangeHandler = (e) => {
    console.log(e)
    const menu = {...this.state.menu}
    menu[e.target.name] = e.target.value
    this.setState( prevState => ({ menu }))
  }

  menuSectionChangeHandler = (e) => {
    console.log(e.target)
    console.log(e.target.value)
    const menu = { ...this.state.menu.subMenus }
    console.log(menu)
    
    // this.state.menu.subMenus['${section.id}']['title'] = e.target.value

    //QUESTIONS:
      // 1:
      // <input type="text" name={`['${section.id}']['title']`} id={`['${section.id}']['title']`} className="form-control"... />
      // - is placing the data in 'name' the right approach? That's how I did things in Rails
      // - e.target is all I have to work with so I would assume so?

      // 2:
      // - should I just change the "name" field to be a stupid string and split it with a helper method? things go an additional level deep

    console.log(menu`${e.target.name}`) //undefined


  }

  removeMenuItemHandler = () => {
    console.log('I hate Javascript')
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
            <label htmlFor="title" className="col-sm-2 col-form-label">Menu Title:</label>
            <div className="col-sm-10">
              <input type="text" name="title" id="title" className="form-control" placeholder="Title Required" defaultValue={menu.title} onChange={this.menuChangeHandler} />
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