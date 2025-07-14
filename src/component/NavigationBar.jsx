import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Student-App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/">Add</Link>
        <Link class="nav-link" to="/Searchstud">Search</Link>

        <Link class="nav-link" to="/DeleteStud">Delete</Link>
                <Link class="nav-link" to="/Viewstud">View</Link>

        <a class="nav-link disabled" aria-disabled="true"></a>
      </div>
    </div>
  </div>
</nav>












    </div>
  )
}

export default NavigationBar