import { useState } from "react";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo_fg98.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="navbar">
            <NavLink to="/">
                <img src={logo} alt="" className="nav_logo" />
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