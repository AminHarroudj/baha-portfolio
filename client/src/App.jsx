import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="text-lg bg-[#ffddd2]">
        <Navbar />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
