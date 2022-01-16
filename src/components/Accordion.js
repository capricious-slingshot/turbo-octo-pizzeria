import { Component } from 'react'
import Card from './Card'

class Accordion extends Component {
  state = {
    isFetching: false,
    menu: {}
  }

  async fetchData() {
    this.setState({ isFetching: true })
    try {
      const response = await fetch(`http://localhost:3001/db`).then(resp => resp.json()).then(json => { this.setState({menu: json}) })
      if (!response.ok) {
        throw Error(response.statusText)
      }
    } catch (error) {
      console.log(`Error: ${error}`)
    }
    this.setState({ isFetching: false })
  }

  componentDidMount() {
    //doesn't this get called *after* render?
    //won't this be called every time the page is reloaded?
    if (Object.keys(this.state.menu).length === 0) { this.fetchData() }
  }

  render() {
    if (this.state.isFetching) {
      return <h1 className="text-center mt-5">Fetching Menu....</h1>;
    }
    //when state updates via setState , triggers re-render automatically
    return (
      <div className="accordion accordion-flush" id="accordion">
        {Object.keys(this.state.menu).map((section, key) => <Card key={ key } data={this.state.menu[section]} /> )}
      </div>
    )
  }
}

export default Accordion