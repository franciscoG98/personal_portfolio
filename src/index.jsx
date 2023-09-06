import Footer from './components/footer'
import Navbar from './components/navbar'
import Terminal from './components/terminal'
import Work from './views/Work'

const Home = () => {

  return (
    <main>
      <Navbar />
      <div className='container'>
        <Terminal />
      </div>
      <Work />
      <Footer />
    </main>
  )
}

export default Home
