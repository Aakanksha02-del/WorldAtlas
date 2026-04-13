import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Country from "./Pages/Country";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/country" element={<Country />} />
        {/* <Route path="/conditionrendering" element={<Conditionrendering />} /> */}
      </Routes>
     <Footer />
    </>
  );
}

export default App;
