import { SiGithub, SiCodepen } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className='footer'>
        <a className="footer_item" href="https://www.linkedin.com/in/francisco-gonzalez-web-dev/" target="__blank" rel="noopener noreferrer">
            <FaLinkedin title="Francisco Gonzalez Linkedin" size={30} />
        </a>
        <a className="footer_item" href="https://github.com/franciscoG98" target="__blank" rel="noopener noreferrer">
            <SiGithub title="Francisco Gonzalez Github" size={30} />
        </a>
        <a className="footer_item" href="https://codepen.io/franciscog98" target="__blank" rel="noopener noreferrer">
            <SiCodepen title="Francisco Gonzalez Codepen" size={30} />
        </a>
        <a className="footer_item" href="mailto:franciscomanuel.gonzalez3@gmail.com">
            <IoMail title="Francisco Gonzalez Gmail" size={30} />
        </a>
    </footer>
  )
}

export default Footer