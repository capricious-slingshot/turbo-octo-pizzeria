

import React from 'react'
// import MenuEdit from './componets/admin/MenuEdit'

export default function Admin(props) {
  return (
    <>
      <nav class="navbar navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/pizzas/edit">Pizzas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/microbrews/edit">Microbrews</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/calzoni/edit">Calzoni</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="/admin/appetizers/edit">Appetizers</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="/admin/salads/edit">Salads</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="/admin/wines/edit">Wines</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="/admin/gelato/edit">Gelato</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="/admin/nonAlcoholic/edit">Non-Alcoholic</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <MenuEdit slug={ props.slug }/> */}
    </>
  )
}