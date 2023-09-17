import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

 export const Navbar = () => {
   const NavLinkStyles = ({isActive})=>{
    return{
      fontweight : isActive ?'bolder':'normal',
      textDecoration : isActive ?'underline':'none'
    
    }
   }
  return (
    <>
    <nav classname="navbar navbar-expand-lg navbar-light bg-light">
   <div classname="container-fluid">
    <div className="navbar-brand" to=" ">Navbar</div>
    <NavLink className="navbar-brand" to="/ ">Home</NavLink>
    <NavLink className="navbar-brand" to="/about ">About</NavLink>
    <NavLink className="navbar-brand" to="/product">product</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" style={NavLinkStyles} to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  style={NavLinkStyles} to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  style={NavLinkStyles} to="/product">Product</NavLink>
        </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        <li class="nav-item">
           <NavLink class="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</NavLink>
         </li>
      </ul>
    </div>
  </div>
</nav>
    </>

   
  )
}

export default Navbar
