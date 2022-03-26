import CardItem from './CardItem'

export default function CardMenuSection(props) {
  const {title, colTitle, items } = props.data

  let secondCol = (colTitle)
    ? <div className="col-4 col-md-3 col-lg-2"><h5 className="sizing">{colTitle}</h5></div>
    : ""

  return (
    <>
      <div className="row section-title">
        <div className="col">
          <h5>{ title }</h5>
        </div>
        {secondCol}
      </div>
      {items.map(item => <CardItem key={ item.id } name={item.name} description={item.description}  price={item.price}  />)}
    </>
  )
}