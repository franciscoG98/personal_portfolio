import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import { HiOutlineDocumentText } from 'react-icons/hi'

const Resume = () => {
  return (
    <>
      <Navbar />
      <ul className='experience'>
        <h2>Experience:</h2>
        <li>
          <article>
            <header>
              <div>
                <h3>Accede Digital</h3>
                <h4>Frontend Developer - Accessibility Enthusiast</h4>
              </div>
              <time className='experience_year'>2023</time>
            </header>
            <footer>
              <p>I worked as a software developer learning and doing research about accessibility. I audited websites with automatic tools and also manual testing. I wrote documentation for the company, and also the VPAT document which is the scheme to write the ACR's.</p>
            </footer>
          </article>
        </li>
        <li>
          <article>
            <header>
              <div>
                <h3>Spark Solutions</h3>
                <h4>Fullstack Javascript Developer</h4>
              </div>
              <time className='experience_year'>2021</time>
            </header>
            <footer>
              <p>I worked as a full stack javascript software developer. I was a team member and worked with agile methodology. My day-to-day task was to follow project manager directives: implementing frontend solutions based on designs or making models and routes on the backend. I started on both sides, but as the time went by I was more involved into frontend tasks. Stack: React - Node</p>
            </footer>
          </article>
        </li>
      </ul>
      <div className='resume_container'>
        <a
          className='resume_link'
          href="https://drive.google.com/file/d/1di2ryzr53VK21KZItS1J5AhPfMS80gIJ/view"
          target="__blank"
          rel="noopener noreferrer"
        >
          <HiOutlineDocumentText size={60} />
          <span>See Resume in English</span>
        </a>
        <a
          className='resume_link'
          href="https://drive.google.com/file/d/1n-h84jsyktCiAUIeShkkqrJRZNhrIcl_/view"
          target="__blank"
          rel="noopener noreferrer"
        >
          <HiOutlineDocumentText size={60} />
          <span lang='es'>Ver Curriculum en Español</span>
        </a>
      </div>
      <Footer />
    </>
  )
}

export default Resume