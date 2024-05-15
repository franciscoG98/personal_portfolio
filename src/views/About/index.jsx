import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import Terminal from '../../components/terminal'

const About = () => {

  return (
    <main>
      <Navbar />
      <div className='about__container'>
        <Terminal />
      </div>
      <Footer />
    </main>
  )
}

export default About