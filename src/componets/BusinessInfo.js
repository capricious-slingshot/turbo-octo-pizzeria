export default function Logo(props){
  const {phone, streetAddress} = props

  return(
    <div className="col" id="headerInfo">
      <h4 className="text-center text-white">Everyday Noon - 9pm</h4>
      <h5 className="text-center text-white">Happy Hour 4 - 6</h5>
      <h6 className="text-center text-white"><a href="tel:206-269-2222" className="phoneContact">{streetAddress} &nbsp; &nbsp; {phone}</a></h6>
    </div>
  )
}