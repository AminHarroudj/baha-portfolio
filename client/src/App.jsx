import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="text-lg bg-[#ffddd2]">
        <Navbar />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
