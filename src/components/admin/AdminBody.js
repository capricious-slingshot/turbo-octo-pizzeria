import MenuEdit from './MenuEdit'

export default function AdminBody(props) {
  const capitalize = (slug) => slug.charAt(0).toUpperCase() + slug.slice(1)

  return (
    <>
      <div className="container fixed-top bg-dark text-center p-4">
        <h1>Admin {capitalize(props.slug)} Edit</h1>
        <nav className="navbar flex-column flex-sm-row navbar-dark bg-dark">
          <div  id="navbarNav">
            <ul className="nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/pizzas/edit">Pizzas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/microbrews/edit">Microbrews</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/calzoni/edit">Calzoni</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/admin/appetizers/edit">Appetizers</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/admin/salads/edit">Salads</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/admin/wines/edit">Wines</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/admin/gelato/edit">Gelato</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/admin/nonAlcoholic/edit">Non-Alcoholic</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>  
      <MenuEdit slug={ props.slug }/>
    </>
  )
}