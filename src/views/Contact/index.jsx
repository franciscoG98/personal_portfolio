import ContactForm from '../../components/contactForm'
import Navbar from '../../components/navbar'
import "./contactStyles.scss"

const Contact = () => {
  return (
    <>
        <Navbar />
        <main>
            <h2>Contact</h2>
            <ContactForm />
        </main>
    </>
  )
}

export default Contact