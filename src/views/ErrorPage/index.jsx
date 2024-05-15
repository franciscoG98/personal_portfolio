import { NavLink } from 'react-router-dom'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'

const Error = () => {
  return (
    <>
        <Navbar />
        <main className='error__page'>
          <h1>Error!</h1>
          <p>Something went wrong, you can return <NavLink to="/" className="link__go-home">Home</NavLink></p>
        </main>
        <Footer />
    </>
  )
}

export default Error