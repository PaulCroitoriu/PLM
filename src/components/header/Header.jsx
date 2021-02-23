import React from "react"
import "./header.styles.scss"
import { auth } from "../../firebase/firebase.utils"
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/crown.svg"

const Header = ({ currentUser }) => {
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
        {currentUser ? (
          <div
            className="nav-button"
            onClick={() => auth.signOut()}
          >{`Sign Out, ${currentUser.displayName.split(" ")[0]}`}</div>
        ) : (
          <Link className="nav-button" to="/register">
            Login
          </Link>
        )}
        <Link className="nav-button" to="/register"></Link>
      </div>
    </div>
  )
}

export default Header
