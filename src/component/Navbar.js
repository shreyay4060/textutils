import './Navbar.css';
import React from 'react'

export default function Navbar(props) {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">{props.about}</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
        </li>
        <li className="nav-item"  >
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="file"><i class="fa-solid fa-file-lines"></i></li>
        <li className="exchange"><i class="fa-solid fa-arrow-right-arrow-left"></i></li>
        
      </ul>
    </div>
  </div>
</nav>
      
    </div>
  )
}
