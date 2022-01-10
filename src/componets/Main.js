import { Component } from 'react'

class Main extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <div className="row">
            <div className="col">
              {this.props.view}
            </div>
          </div>
        </div>
      </main>
    )
  }
 }

 export default Main