import { Component } from 'react'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.phone = props.phone
    this.streetAddress = props.streetAddress
    this.city = props.city
    this.year = new Date().getFullYear()
  }

  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col col-sm-6 col-lg-3 order-lg-1">
              <h6><a href="tel:206-269-2222" className="phoneContact text-white">{this.phone}</a></h6>
              <h6 className="text-white">{this.streetAddress}</h6>
              <h6 className="text-white">{this.city}</h6>
            </div>
            <div className="col col-sm-6 col-lg-3 order-lg-3">
              <a className="btn btn-social-icon btn-facebook text-white" href="https://www.facebook.com/BambinosPizzeriaSeattle/"><i className="fa fa-facebook"></i></a>
              <a className="btn btn-social-icon btn-instagram text-white" href="http://instagram.com/"><i className="fa fa-instagram"></i></a>
              <h6 id="copyright">Copyright {this.year}</h6>
            </div>
            <div className="order-lg-2" id="googleMap">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.4282112146398!2d-122.34989164878577!3d47.61780689509472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549015d36410d9c7%3A0x6cf1621e45ab5baa!2sBAMBINOS%20PIZZERIA!5e0!3m2!1sen!2sus!4v1631315989797!5m2!1sen!2sus" title="Find us on Google Maps" width="400" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

 export default Footer