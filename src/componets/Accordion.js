import { Component } from 'react'
import Card from './Card'
import Table from './Table'
//question about dumbing down the card component - overlay and data-target should not be editable

class Accordion extends Component {
  render() {
    return (
      <div className="accordion accordion-flush" id="accordion">
        <Card title="Brick Oven Pizza"
          dataTarget="pizza"
          overlay="35"
          description="Our handcrafted brick oven pizza is traditional 'dark crust' because it is baked directly on stone. If you prefer 'light crust' please specify. 10 inch is 4 slices and makes a great personal size, or a 16 inch is 8 slices, good for 2+ people. "/>
        <Table title="Microbrews"
          dataTarget="taps"
          overlay="10"
          description="All drafts $7" />
        <Card title="Calzoni"
          dataTarget="calzoni"
          overlay="50"
          description="All Calzoni is made with Tomato Sauce and Mozzerella. Subtractions OK, no substitutions" />
      <Card title="Appetizers"
          dataTarget="appetizers"
          overlay="35"
          description="" />
      <Card title="Salads"
          dataTarget="salad"
          overlay="50"
          description="" />
      <Card title="Wine"
          dataTarget="vino"
          overlay="50"
          description="" />
      <Card title="D'Ambrosio Gelato"
          dataTarget="gelato"
          overlay="35"
          description="Price per Scoop" />
      <Card title="Non Alcholic"
          dataTarget="na-bev"
          overlay="35"
          description=""/>
      </div>
    )
  }
 }

 export default Accordion