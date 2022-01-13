
export default function CardItem(props) {

  const { name, description, price } = props

  return (
    <div className="row offset-1">
      <div className="col">
        <h6>{name}</h6>
        <p>{description}</p>
      </div>
      <div className="col-4 col-md-3 col-lg-2 pricing">{price}</div>
    </div>
  )
}

