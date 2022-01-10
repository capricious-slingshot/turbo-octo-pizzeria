import { Component } from 'react'
import Card from './Card'

class Accordion extends Component {
  render() {
    let data = fetch('http://localhost:3001/pizzas')
               .then(response => response.json())
               .then(data => console.log(data));
    
    //I don't want to make 8 seperate calls to the server - very expensive
    //why can't I have a function outside of render but inside the class? scope?
    //why was JS written by hipster idiots? I hate this language.


    //data is a hash of hashes
    //grab each key, and pass it's value to Card
    //why can't I chain this shit? 
    return (
      <div className="accordion accordion-flush" id="accordion">
        {console.log(data)}
        {/* {Object.keys(data).forEach((key, index) => <Card data={data[key]} />)}  */}
      </div>
    )
  }
 }

export default Accordion
 
//   <Card data="Brick Oven Pizza"
      //     dataTarget="pizza"
      //     overlay="35"
      //     description="Our handcrafted brick oven pizza is traditional 'dark crust' because it is baked directly on stone. If you prefer 'light crust' please specify. 10 inch is 4 slices and makes a great personal size, or a 16 inch is 8 slices, good for 2+ people. "/>
      //   <Card title="Microbrews"
      //     dataTarget="taps"
      //     overlay="10"
      //     description="All drafts $7" />
      //   <Card title="Calzoni"
      //     dataTarget="calzoni"
      //     overlay="50"
      //     description="All Calzoni is made with Tomato Sauce and Mozzerella. Subtractions OK, no substitutions" />
      //   <Card title="Appetizers"
      //     dataTarget="appetizers"
      //     overlay="35"
      //     description="" />
      //   <Card title="Salads"
      //     dataTarget="salad"
      //     overlay="50"
      //     description="" />
      //   <Card title="Wine"
      //     dataTarget="vino"
      //     overlay="50"
      //     description="" />
      //   <Card title="D'Ambrosio Gelato"
      //     dataTarget="gelato"
      //     overlay="35"
      //     description="Price per Scoop" />
      //   <Card title="Non Alcholic"
      //     dataTarget="na-bev"
      //     overlay="35"
      //     description=""/>