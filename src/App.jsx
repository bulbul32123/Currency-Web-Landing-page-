import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Navbar from "./components/header/Navbar"
import Hero from "./components/home/Hero"
import Services from "./components/services/Services"

function App() {
  return (
    <>
    <Navbar />
      <Hero />
      <About/>
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App
