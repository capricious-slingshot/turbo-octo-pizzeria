
export default function TableRow(props){
  const {tapNumber, brewery, beerName, abv, state, ounces} = props

  return (
    <tr>
      <th>{ tapNumber }</th>
      <th>{ brewery }</th>
      <th>{ beerName }</th>
      <th>{ abv }</th>
      <th>{ state }</th>
      <th>{ ounces }</th>
    </tr>
  )
}