import { useState } from "react";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo_fg98.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

    return (
      <nav className="navbar" id="main-navigation" role="navigation" aria-label="Main navigation">
        <NavLink className="nav_link" to="/">
          <img
            src={logo}
            alt="Francisco Gonzalez Logo"
            className="nav_title"
          />
        </NavLink>
        <div className={`nav_list ${isOpen && "open"}`}>
          <NavLink to="/" className="nav_item" activeclassname="active" onClick={() => setIsOpen(!isOpen)}>
            Home
          </NavLink>
          <NavLink to="/about" className="nav_item" activeclassname="active" onClick={() => setIsOpen(!isOpen)}>
            About
          </NavLink>
          <NavLink to="/work" className="nav_item" activeclassname="active" onClick={() => setIsOpen(!isOpen)}>
            Work
          </NavLink>
          <NavLink to="/resume" className="nav_item" activeclassname="active" onClick={() => setIsOpen(!isOpen)}>
            Resume
          </NavLink>
        </div>
        {/* burger menu */}
        <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
      </nav>
    )
}

export default Navbar