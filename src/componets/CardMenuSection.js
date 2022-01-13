import CardItem from './CardItem'

export default function CardMenuSection(props) {
  const menu = props.data

  let secondCol = (menu.colTitle)
    ? <div className="col-4 col-md-3 col-lg-2"><h5 className="sizing">{menu.colTitle}</h5></div>
    : ""

  return (
    <>
      <div className="row section-title">
        <div className="col">
          <h5>{ menu.title }</h5>
        </div>
        { secondCol}
      </div>
      {menu.items.map(item => <CardItem key={ item.id } name={item.name} description={item.description}  price={item.price}  />)}
    </>
  )
}