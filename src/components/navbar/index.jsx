import { useState } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
            <div className="nav_logo">
                <NavLink to="/">
                    <h2>FG</h2>
                </NavLink>
            </div>

            <div className={`nav_list ${isOpen && "open"}`}>
                <NavLink to="/" className="nav_item" activeclassname="active">
                    Home
                </NavLink>
                <NavLink to="/about" className="nav_item" activeclassname="active">
                    About
                </NavLink>
                <NavLink to="/work" className="nav_item" activeclassname="active">
                    Work
                </NavLink>
                <NavLink to="/contact" className="nav_item" activeclassname="active">
                    Contact
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