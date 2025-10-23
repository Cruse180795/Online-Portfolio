import Header from "./sections/header.jsx";
import Footer from "./sections/footer.jsx";


function App() {

  return (
    <div className="h-screen flex flex-col">
      <Header />

      <main className="mt-5 flex-1">Main Content</main>
      <Footer />
    </div>
  )
}

export default App
