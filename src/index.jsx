import Footer from './components/footer'
import Navbar from './components/navbar'
import Terminal from './components/terminal'

const Home = () => {

  return (
    <main>
      <Navbar />
      <div className='container'>
        <Terminal />
      </div>
      <Footer />
    </main>
  )
}

export default Home
