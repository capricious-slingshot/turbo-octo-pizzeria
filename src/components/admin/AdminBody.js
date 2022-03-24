import MenuEdit from './MenuEdit'

import {Link} from 'react-router-dom'

export default function AdminBody(props) {
  const capitalize = (slug) => slug.charAt(0).toUpperCase() + slug.slice(1)

  return (
    <>
      <div className="container fixed-top bg-dark text-center p-4">
        <h1>Edit {capitalize(props.slug)} </h1>
        <nav className="navbar flex-column flex-sm-row navbar-dark bg-dark">
          <div  id="navbarNav">
            <ul className="nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/pizzas/edit">Pizzas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/microbrews/edit">Microbrews</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/calzoni/edit">Calzoni</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/admin/appetizers/edit">Appetizers</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/admin/salads/edit">Salads</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/admin/wines/edit">Wines</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/admin/gelato/edit">Gelato</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/nonAlcoholic/edit">Non-Alcoholic</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>  
      <MenuEdit slug={ props.slug }/>
    </>
  )
}