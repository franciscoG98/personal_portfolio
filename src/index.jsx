import Navbar from './components/navbar'
import { SiGithub, SiCodepen, SiLeetcode, SiHashnode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Home = () => {

  return (
    <>
      <Navbar />
      <main className='home__container'>
        <div className='home__intro'>
          Hey there! I'm
          <h1 className='home__title'>Francisco</h1>
          I build things online, you can find me here:
        </div>

        <div className="home__links">
          <a
            className="home__link"
            href="https://www.linkedin.com/in/francisco-gonzalez-web-dev/"
            target="__blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin title="Francisco Gonzalez Linkedin" size={40} />
            <span className='link__slug'>Linkedin</span>
          </a>
          <a
            className="home__link"
            href="https://github.com/franciscoG98"
            target="__blank"
            rel="noopener noreferrer"
          >
            <SiGithub title="Francisco Gonzalez Github" size={40} />
            <span className='link__slug'>Github</span>
          </a>
          <a
            className="home__link"
            href="https://franciscog98.hashnode.dev/"
            target="__blank"
            rel="noopener noreferrer"
          >
            <SiHashnode title="Francisco Gonzalez Hashnode" size={40} />
            <span className='link__slug'>Hashnode</span>
          </a>
          <a
            className="home__link"
            href="mailto:franciscomanuel.gonzalez3@gmail.com"
          >
            <IoMail title="Francisco Gonzalez Gmail" size={40} />
            <span className='link__slug'>Email</span>
          </a>
          <a
            className="home__link"
            href="https://codepen.io/franciscog98"
            target="__blank"
            rel="noopener noreferrer"
          >
            <SiCodepen title="Francisco Gonzalez Codepen" size={40} />
            <span className='link__slug'>CodePen</span>
          </a>
          <a
            className="home__link"
            href="https://leetcode.com/u/panx0/"
            target="__blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode title="Francisco Gonzalez LeetCode" size={40} />
            <span className='link__slug'>LetCode</span>
          </a>
        </div>
      </main>
    </>
  )
}

export default Home
