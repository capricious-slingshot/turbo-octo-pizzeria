import Logo from './Logo'
import BusinessInfo from './BusinessInfo'
// import { x,y,z  } from 'react-bootstrap';

export default function Header(){
  return (
    <div className="container">
      <div className="row">
        <Logo />
        <BusinessInfo phone={"206-269-2222"} streetAddress={"401 Cedar St"}/>
      </div>
    </div>
  )
}