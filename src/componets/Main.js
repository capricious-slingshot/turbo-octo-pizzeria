import { Component } from 'react'

class Main extends Component {
  render() {
    return (
      <main>
        <div class="container">
          <div class="row">
            <div class="col">
              {this.props.view}
            </div>
          </div>
        </div>
      </main>
    )
  }
 }

 export default Main