import TableRow from './TableRow'

export default function CardMenuTable(props) {

  let isOdd = (item) => ( item.id % 2 === 0) ? "" : "odd"

  return (
    <table className="table table-sm table-striped">
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
        {props.data.map(item => <TableRow key={item.id}
                              className={isOdd(item)}
                              tapNumber={item.tapNumber}
                              brewery={item.brewery}
                              beerName={item.beerName}
                              bv={item.abv}
                              state={item.state}
                              ounces={item.ounces} />)}
      </tbody>
    </table>
  )
}