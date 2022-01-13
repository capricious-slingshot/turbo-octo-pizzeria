import { Component } from 'react'
import Card from './Card'

import data from '../data'

//is there a classier alternative to console.log? it's awful

//pass to children
  //async issue
  //how can i even look at props ?

// class Accordion extends Component {
//   constructor() {
//     super()
//     this.menu = this.fetchData
//     this.state = {
//       isFetching: false,
//       pizzas: this.menu.pizzas,
//       microbrews: this.menu.microbrews,
//       appetizers: this.menu.appetizers,
//       calzoni: this.menu.calzoni,
//       salads: this.menu.salads,
//       wines: this.menu.wines,
//       gelato: this.menu.gelato,
//       nonalcholic: this.menu.nonalcholic
//     }
//   }
  

//   //example I followed: https://dmitripavlutin.com/react-fetch-lifecycle-methods-hooks-suspense/

//   //why is this necessacary? can this be skipped? doesn't this get called afeter render?
//   componentDidMount() {
//     this.fetchData()
//   }

//   //how the fuck does this work? is this just garbage? state is changing, not props
//   componentDidUpdate(prevProps) {
//     if (prevProps.query !== this.props.query) {
//       this.fetchData();
//     }
//   }

//   async fetchData() {
//     this.setState({ isFetching: true })
//     try {
//       const response = await fetch(`http://localhost:3001/db`).then(resp=> resp.json())
//       if (!response.ok) {
//         throw Error(response.statusText);
//       }
//     } catch (error) {
//       console.log(`Error: ${error}`);
//     }
//     //set state with data somehow
//     this.setState({ isFetching: false })
//   }

//   render() {
//     if (this.state.isFetching) {
//       return <div>Fetching Menu....</div>;
//     }
//     return (
//       <div className="accordion accordion-flush" id="accordion">
//         {<Card data={this.state.pizzas} />}
//       </div>
//     )
//   }
// }


class Accordion extends Component {

  render() {

    return (
      <div className="accordion accordion-flush" id="accordion">
        {Object.keys(data).map((section, key) => <Card data={data[section]} /> )}
      </div>
    )
  }
}

export default Accordion