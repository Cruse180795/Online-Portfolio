import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <header id="hero">
        <Nav />
        <Hero />
      </header>

      <main>
        {/* Other sections like About, Projects, Contact Me would go here */}
        <Projects sectionId="#projects" />
        <Contact projectId="#contact" />
      </main>
    </div>
  );
}

export default App;
