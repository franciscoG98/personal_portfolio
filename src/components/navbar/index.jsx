import { useState } from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="navbar" id="main-navigation" role="navigation" aria-label="Main navigation">
            <NavLink className="nav_link" to="/">
                <h1 className="nav_title">Francisco Gonzalez</h1>
            </NavLink>
            <div className={`nav_list ${isOpen && "open"}`}>
                <NavLink to="/" className="nav_item" activeClassName="active" onClick={() => setIsOpen(!isOpen)}>
                    Home
                </NavLink>
                <NavLink to="/work" className="nav_item" activeClassName="active" onClick={() => setIsOpen(!isOpen)}>
                    Work
                </NavLink>
                <NavLink to="/resume" className="nav_item" activeClassName="active" onClick={() => setIsOpen(!isOpen)}>
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