import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import { HiOutlineDocumentText } from 'react-icons/hi'

import './resumeStyles.scss'

const Resume = () => {
  return (
    <>
        <Navbar />
        <main className='resume_container'>
          <section>
            <a className='resume_link' href="https://drive.google.com/file/d/1di2ryzr53VK21KZItS1J5AhPfMS80gIJ/view" target="__blank" rel="noopener noreferrer">
              <HiOutlineDocumentText size={60} />
              <span>See Resume in English</span>
            </a>
            <a className='resume_link' href="https://drive.google.com/file/d/1n-h84jsyktCiAUIeShkkqrJRZNhrIcl_/view" target="__blank" rel="noopener noreferrer">
              <HiOutlineDocumentText size={60} />
              <span lang='es'>Ver Curriculum en Español</span>
            </a>
          </section>
        </main>
        <Footer />
    </>
  )
}

export default Resume