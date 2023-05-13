import { SiGithub, SiGmail, SiCodepen } from "react-icons/si";
import { GrLinkedinOption } from "react-icons/gr";

import './footerStyles.scss'

const Footer = () => {
  return (
    <footer className='footer'>
        <section>
            <a href="https://www.linkedin.com/in/francisco-gonzalez-web-dev/" target="__blank" rel="noopener noreferrer" className="footer_item">
                <GrLinkedinOption size={60} />
                <span>Linkedin</span>
            </a>
            <a href="https://github.com/franciscoG98" target="__blank" rel="noopener noreferrer" className="footer_item">
                <SiGithub size={60} />
                <span>Github</span>
            </a>
            <a href="https://codepen.io/franciscog98" target="__blank" rel="noopener noreferrer" className="footer_item">
                <SiCodepen size={60} />
                <span>Codepen</span>
            </a>
            <a href="mailto:franciscomanuel.gonzalez3@gmail.com" className="footer_item">
                <SiGmail size={60} />
                <span>Mail</span>
            </a>
        </section>
        <span>&copy;{new Date().getFullYear()} Francisco Gonzalez - All Rights Reserved</span>
    </footer>
  )
}

export default Footer