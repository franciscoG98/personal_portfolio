import Footer from "./components/footer"
import Navbar from "./components/navbar"

import About from "./views/About"
import Work from "./views/Work"
import Home from "./views/Home"
import Blog from "./views/Blog"

import { useRef } from "react";

console.log(
  '%cWhat are you looking for? My console is clear!!\nOr it was the last time I checked...\nIf not, please feel free to reach out, I\'d be grateful!',
  'background-color: #000; border: 1px solid #15b315; color: #15b315; font-family: sans-serif; padding: 12px 16px; border-radius: 8px; font-size: 16px;'
);

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
