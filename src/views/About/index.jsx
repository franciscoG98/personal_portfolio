import Navbar from '../../components/navbar'
import Terminal from '../../components/terminal'
import "./aboutStyles.scss"

const About = () => {
  return (
    <>
        <Navbar />
        <main>
            <h2>About</h2>
            <Terminal />
        </main>
    </>
  )
}

export default About