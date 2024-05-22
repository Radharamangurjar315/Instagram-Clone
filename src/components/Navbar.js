import React from "react"

const NavBar = () =>{
    return(
    <nav>
    <div className="nav-wrapper white" >
      <a href="/" className="brand-logo left">Instagram</a>
      <ul id="nav-mobile" className="right">
        <li><a href="/signin">Login</a></li>
        <li><a href="/signup">Signup</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/create">Create Post</a></li>
      </ul>
    </div>
  </nav>
    )
}

export default NavBar