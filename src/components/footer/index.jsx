import { SiGithub, SiCodepen, SiLeetcode } from "react-icons/si";
import { FaLinkedin, FaMediumM } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className='footer'>
        <a
            className="footer_item"
            data-tooltip="Linkedin"
            href="https://www.linkedin.com/in/francisco-gonzalez-web-dev/"
            target="__blank"
            rel="noopener noreferrer"
        >
            <FaLinkedin title="Francisco Gonzalez Linkedin" size={30} />
        </a>
        <a
            className="footer_item"
            data-tooltip="Github"
            href="https://github.com/franciscoG98"
            target="__blank"
            rel="noopener noreferrer"
        >
            <SiGithub title="Francisco Gonzalez Github" size={30} />
        </a>
        <a
            className="footer_item"
            data-tooltip="CodePen"
            href="https://codepen.io/franciscog98"
            target="__blank"
            rel="noopener noreferrer"
        >
            <SiCodepen title="Francisco Gonzalez Codepen" size={30} />
        </a>
        <a
            className="footer_item"
            data-tooltip="Mail"
            href="mailto:franciscomanuel.gonzalez3@gmail.com"
        >
            <IoMail title="Francisco Gonzalez Gmail" size={30} />
        </a>
        <a
            className="footer_item"
            data-tooltip="LeetCode"
            href="https://leetcode.com/u/panx0/"
            target="__blank"
            rel="noopener noreferrer"
        >
            <SiLeetcode title="Francisco Gonzalez LeetCode" size={30} />
        </a>
        <a
            className="footer_item"
            data-tooltip="Medium"
            href="https://medium.com/@franciscog98"
            target="__blank"
            rel="noopener noreferrer"
        >
            <FaMediumM title="Francisco Gonzalez Medium" size={30} />
        </a>
    </footer>
  )
}

export default Footer