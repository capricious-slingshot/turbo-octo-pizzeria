import { Component } from 'react'
import TableRow from './TableRow'

class CardMenuTable extends Component {
  render() {
    return (
      <table class="table table-sm table-striped">
        <thead>
          <tr>
            <th>Tap</th>
            <th>Brewery</th>
            <th>Beer</th>
            <th>ABV</th>
            <th>State</th>
            <th>Oz</th>
          </tr>
        </thead>
        <tbody>
          <TableRow
            tapNumber="1"
            brewery="Boneyard"
            beerName="RPM IPA"
            abv="6.5"
            state="OR"
            ounces="16"
          />
          <TableRow className="odd"
            tapNumber="2"
            brewery="Ommegang"
            beerName="Rosetta"
            abv="5.6"
            state="NY"
            ounces="12"
          />
          <TableRow
            tapNumber="3"
            brewery="Crucible"
            beerName="Blood Orange Heffe"
            abv="5.2"
            state="WA"
            ounces="16"
          />
          <TableRow className="odd"
            tapNumber="4"
            brewery="Pfreim"
            beerName="Pilsner"
            abv="5"
            state="OR"
            ounces="16"
          />
          <TableRow
            tapNumber="5"
            brewery="Ace"
            beerName="Pineapple Cider"
            abv="5"
            state="WA"
            ounces="12"
          />
          <TableRow className="odd"
            tapNumber="6"
            brewery="Diamond Knot"
            beerName="Brown Ale"
            abv="5.9"
            state="WA"
            ounces="16"
          />
          <TableRow
            tapNumber="7"
            brewery="Pike Place Brewing"
            beerName="Kilt Lifter Scotch Ale"
            abv="7.5"
            state="WA"
            ounces="12"
          />
          <TableRow className="odd"
            tapNumber="8"
            brewery="Firestone"
            beerName="DBL Mind Haze"
            abv="8.2"
            state="CA"
            ounces="12"
          />
          <TableRow
            tapNumber="9"
            brewery="805"
            beerName="Blonde"
            abv="4.7"
            state="CA"
            ounces="12"
          />
          <TableRow className="odd"
            tapNumber="10"
            brewery="Scuttlebutt"
            beerName="Amber"
            abv="4.7"
            state="CA"
            ounces="12"
          />
          <TableRow
            tapNumber="11"
            brewery="Freemont"
            beerName="Summer Ale"
            abv="5.2"
            state="WA"
            ounces="12"
          />
          <TableRow className="odd"
            tapNumber="12"
            brewery="Pfriem"
            beerName="Pale Ale"
            abv="5"
            state="OR"
            ounces="12"
          />
          <TableRow
            tapNumber="13"
            brewery="Seattle Cider"
            beerName="Berry Rose"
            abv="5"
            state="WA"
            ounces="12"
          />
          <TableRow className="odd"
            tapNumber="14"
            brewery="Stoup"
            beerName="Imperial Stout"
            abv="11"
            state="WA"
            ounces="12"
          />
          <TableRow
            tapNumber="15"
            brewery="Ecliptic"
            beerName="Tucana Tang Sour"
            abv="5"
            state="OR"
            ounces="12"
          />
          <TableRow className="odd"
            tapNumber="16"
            brewery="Anderson Valley"
            beerName="Briney Melon Gose"
            abv="4.2"
            state="CA"
            ounces="12"
          />
          <TableRow
            tapNumber="17"
            brewery="Lost Coast"
            beerName="Tangerine Wheat Ale"
            abv="5.2"
            state="CA"
            ounces="16"
          />
          <TableRow className="odd"
            tapNumber="18"
            brewery="Deschutes"
            beerName="Porter"
            abv="6.5"
            state="WA"
            ounces="12"
          />
        </tbody>
      </table>
    )
  }
}
export default CardMenuTable

