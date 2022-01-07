import { Component } from 'react'
import CardItem from './CardItem'

class Card extends Component{
  constructor(props) {
    super(props)
    this.dataTarget = props.dataTarget
    this.overlay = props.overlay
    this.title = props.title
    this.description = props.description
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h4><button class="card-accordion-anchor" data-toggle="collapse" data-target={`#${this.dataTarget}`}>{ this.title }</button></h4>
          <div className="collapse show" id={ this.dataTarget }data-parent="#accordion">
            <div className="card-body col-12 overflow" id={`#${this.dataTarget}-card`}>
              <div className={`cotainer overlay-${this.dataTarget} box-padding`}>
                <p>{ this.description }</p>
                <div className="row section-title">
                  <div className="col">
                    <h5>House Combinations</h5>
                  </div>
                  <div className="col-4 col-md-3 col-lg-2" >
                    <h5 className="sizing">10" / 16"</h5>
                  </div>
                </div>
                <CardItem name="Calorosa" description="Tomato Sauce, Smoked Mozzerella, Pepperoni, Bacon, Italian Sausage" price="15 / 23" />
                <CardItem name="Bambinos" description="Tomato Sauce, Mozzerella, Pepperoni, Meatball, Mushrooms, Olives" price="15 / 24" />
                <CardItem name="Capricciosa" description="Tomato Sauce, Fresh Mozzerella, Italian Sausage, Onions, Mushrooms" price="14 / 20" />
                <CardItem name="Bufala" description="Tomato Sauce, Water Buffalo Mozzerella, Basil, Olive Oil" price="11 / 18" />
                <CardItem name="Genovese" description="Pesto, Fresh Mozzerella, Chicken, Roasted Garlic, Tomatoes" price="14 / 22" />
                <CardItem name="Lazio" description="Truffle Oil, Fontina, Mushrooms" price="13 / 20" />
                <CardItem name="Tropicale" description="Tomato Sauce, Fresh Mozzerella, Canadian Bacon, Pineapple" price="13 / 20" />
                <CardItem name="Primavera" description="Tomato Sauce, Fresh Mozzerella, Onions, Peppers, Mushrooms, Olives, Tomatoes" price="15 / 24" />
                <div className="row section-title">
                  <div className="col">
                    <h5>Build Your Own</h5>
                  </div>
                </div>
                <CardItem name="Margherita Base" description="Tomato Sauce, Fresh Mozzerella, Basil" price="11 / 16" />
                <CardItem name="Aditional Toppings" description="Eggplant, Onions, Tomatoes, Pineapple, Olives, Gaeta Olives, Peppers,Castelvetrano Olives, Mushroom, Portebello, Roasted Garlic, Ricotta
                      Mama's Lil' Peppers, Calabrian Peppers,Chicken, Pepperoni, Chicken Sausage, Italian Sausage, Spicy Calabrese Sausage, Ham, Salami, Bacon White Anchovies, Fontina, Extra Mozzerella" price="1.5 / 2.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card