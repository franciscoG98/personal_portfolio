import Footer from './components/footer'
import Navbar from './components/navbar'
import Terminal from './components/terminal'
import Work from './views/Work'
import Resume from './views/Resume'

const Home = () => {

  return (
    <main>
      <Navbar />
      <div className='container'>
        <Terminal />
      </div>
      <Work />
      <Resume />
      <Footer />
    </main>
  )
}

export default Home
