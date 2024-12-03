import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import WorkExperience from "./sections/WorkExperience";
import WhatsappChat from "./components/WhatsappChat";
import Clients from "./sections/Clients";

const App = () => {
  return (
    <main className="max-w-full mx-0 lg:mx-16 mt-5 md:mt-16">
      <WhatsappChat />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <WorkExperience />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
