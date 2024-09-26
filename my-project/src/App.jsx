import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import WorkExperience from './sections/WorkExperience'
import InfiniteMovingCards from './components/ui/InfiniteMovingCard'
import whatsappChat from './components/whatsappChat'


const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <whatsappChat />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <WorkExperience />
      <InfiniteMovingCards/>
      {/* <Clients /> */}
      <Contact />
      <Footer />
    </main>
  )
}

export default App
