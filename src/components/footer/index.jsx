import { SiGithub, SiGmail, SiCodepen } from "react-icons/si";
import { GrLinkedinOption } from "react-icons/gr";

import './footerStyles.scss'

const Footer = () => {
  return (
    <footer className='footer'>
        <section>
            <a className="footer_item" href="https://www.linkedin.com/in/francisco-gonzalez-web-dev/" target="__blank" rel="noopener noreferrer">
                <GrLinkedinOption size={60} />
                <span>Linkedin</span>
            </a>
            <a className="footer_item" href="https://github.com/franciscoG98" target="__blank" rel="noopener noreferrer">
                <SiGithub size={60} />
                <span>Github</span>
            </a>
            <a className="footer_item" href="https://codepen.io/franciscog98" target="__blank" rel="noopener noreferrer">
                <SiCodepen size={60} />
                <span>Codepen</span>
            </a>
            <a className="footer_item" href="mailto:franciscomanuel.gonzalez3@gmail.com">
                <SiGmail size={60} />
                <span>Mail</span>
            </a>
        </section>
        <span className="copy">&copy;{new Date().getFullYear()} Francisco Gonzalez - All Rights Reserved</span>
    </footer>
  )
}

export default Footer