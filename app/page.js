import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Experience from "../components/Experience"
import Architecture from "../components/Architecture"
import Projects from "../components/Projects"
import GithubProjects from "../components/GithubProjects"
import Contact from "../components/Contact"

export default function Home(){
  return(
    <main>

      <Navbar/>

      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Architecture/>
      <Projects/>
      <GithubProjects/>
      <Contact/>

    </main>
  )
}