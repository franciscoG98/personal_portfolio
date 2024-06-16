import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from '../../assets/images/logo_fg98.png'

const NavbarSecondary = ({ refs }) => {

  const [isOpen, setIsOpen] = useState(false)
  const [homeRef, aboutRef, workRef, blogRef] = refs;

  const handleClick = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)

    switch (e.target.innerHTML.toLowerCase()) {
      case 'about':
        aboutRef.current?.scrollIntoView({
          behavior: 'smooth'
        });
        break;
      case 'work':
        workRef.current?.scrollIntoView({
          behavior: 'smooth'
        });
        break;
      case 'blog':
        blogRef.current?.scrollIntoView({
          behavior: 'smooth'
        });
        break;
      case 'home':
        homeRef.current?.scrollIntoView({
          behavior: 'smooth'
        });
        break;
    }
  }

  const links = [
    {
      id: '1234',
      label: 'Home',
      location: '#home'
    },
    {
      id: '4123',
      label: 'About',
      location: '#about'
    },
    {
      id: '3412',
      label: 'Work',
      location: '#work'
    },
    {
      id: '2341',
      label: 'Blog',
      location: '#blog'
    }
  ]

  return (
    <div className="navbar__container">
      <nav className="navbar" id="main-navigation" role="navigation" aria-label="Main navigation">
        <a href="/" className={`nav_item`}>
          <img
            src={logo}
            alt="Francisco Gonzalez Logo"
            className="nav_title"
          />
        </a>
        <div
          className={`nav_list ${isOpen && "open"}`}
        >
          {
            links.map(i => (
              <a
                key={i.id}
                href={i.location}
                className="nav_item"
                activeclassname="active"
                onClick={(e) => handleClick(e)}
              >
                {i.label}
              </a>
            ))
          }
        </div>

        {/* mobile menu */}
        {
          isOpen
            ? <IoClose
              color="#fff"
              size={30}
              className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}
            />
            : <IoMenu
              color="#fff"
              size={30}
              className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}
            />
        }
      </nav>
    </div>
  );
};

export default NavbarSecondary;
