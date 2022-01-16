import Main from './Main'
import Header from './Header'
import Footer from './Footer'
import Accordion from './Accordion'

export default function Body() {
  return (
    <>
      <Header />
      <Main view={<Accordion />} />
      <Footer phone={"206 - 269 - 2222"} streetAddress={"401 Cedar St"} city={"Seattle, WA 98121"} />
    </>
  )
}