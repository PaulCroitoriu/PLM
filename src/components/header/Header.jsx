import React from "react"
import "./header.styles.scss"
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/crown.svg"

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="nav-buttons">
        <Link className="nav-button" to="/shop">
          Shop
        </Link>
        <Link className="nav-button" to="/contact">
          Contact
        </Link>
        <Link className="nav-button" to="/register">
          Login
        </Link>
      </div>
    </div>
  )
}

export default Header
