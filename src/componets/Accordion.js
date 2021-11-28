import { Component } from 'react'
import Card from './Card'

class Accordion extends Component {
  render() {
    return (
      <div className="accordion accordion-flush" id="accordion">
        <Card title="Brick Oven Pizza"
          dataTarget="pizza"
          description="Our handcrafted brick oven pizza is traditional 'dark crust' because it is baked directly on stone. If you prefer 'light crust' please specify. 10 inch is 4 slices and makes a great personal size, or a 16 inch is 8 slices, good for 2+ people. "/>
      </div>
    )
  }
 }

 export default Accordion