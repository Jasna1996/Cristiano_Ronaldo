import About from "./components/About";
import Careers from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <div>
        <Home />
      </div>
      <div className="my-2">
        <About />
      </div>
      <div id="careers" className="my-4">
        <Careers />
      </div>
      <div id="gallery" className="my-4">
        <Gallery />
      </div>
      <div id="contact" className="mx-0">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
