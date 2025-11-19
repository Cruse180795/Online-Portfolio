import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Projects from "./components/Projects"

function App() {


  return (
    <div>
        <header id="hero">
          <Nav />
          <Hero />
        </header>

        <main>
          {/* Other sections like About, Projects, Contact Me would go here */}
          <Projects sectionId="#projects"/>

        </main>
    </div>
  )
}

export default App
