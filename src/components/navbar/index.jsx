import { useState } from "react"
import { NavLink } from "react-router-dom"
import "./navbarStyles.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
            <div className="nav_logo">
                <NavLink to="/" activeclassname="smth">FG</NavLink>
            </div>

            <div className={`nav_list ${isOpen && "open"}`}>
                <NavLink to="/" className="nav_item" activeclassname="active">
                    Home
                </NavLink>
                <NavLink to="/work" className="nav_item" activeclassname="active">
                    Work
                </NavLink>
                <NavLink to="/resume" className="nav_item" activeclassname="active">
                    Resume
                </NavLink>
            </div>

            <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </nav>
  )
}

export default Navbar