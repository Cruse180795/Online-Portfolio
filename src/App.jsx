import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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

      <Footer />
    </div>
  );
}

export default App;
