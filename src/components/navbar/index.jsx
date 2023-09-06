import { useState } from "react"
import "./navbarStyles.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
            <div className="nav_logo">
                <a href="#" activeclassname="smth">FG</a>
            </div>

            <div className={`nav_list ${isOpen && "open"}`}>
                <a href="" className="nav_item" activeclassname="active" onClick={() => setIsOpen(!isOpen)}>
                    Home
                </a>
                <a href="#work_section" className="nav_item" activeclassname="active" onClick={() => setIsOpen(!isOpen)}>
                    Work
                </a>
                <a href="#resume_section" className="nav_item" activeclassname="active" onClick={() => setIsOpen(!isOpen)}>
                    Resume
                </a>
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