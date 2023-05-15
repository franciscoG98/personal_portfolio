import ContactForm from '../../components/contactForm'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import "./contactStyles.scss"

const Contact = () => {
  return (
    <>
        <Navbar />
        <main>
            <h2 className='contact_title'>Contact me!</h2>
            <ContactForm />
        </main>
        <Footer />
    </>
  )
}

export default Contact