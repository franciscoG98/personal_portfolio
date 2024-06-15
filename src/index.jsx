import Footer from "./components/footer"
import Navbar from "./components/navbar"

import About from "./views/About"
import Work from "./views/Work"
import Home from "./views/Home"
import Blog from "./views/Blog"

import { useRef } from "react";


const index = () => {

  const homeRef = useRef()
  const aboutRef = useRef()
  const workRef = useRef()
  const blogRef = useRef()

  const refsArr = [homeRef, aboutRef, workRef, blogRef]

  return (
    <>
      <Navbar refs={refsArr} />

      <section ref={homeRef} id="home"><Home /></section>
      <section ref={aboutRef} id="about"><About /></section>
      <section ref={workRef} id="work"><Work /></section>
      <section ref={blogRef} id="blog"><Blog /></section>

      <Footer />
    </>
  )
}

export default index
