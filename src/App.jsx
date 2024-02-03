import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";

import Product from "./components/pages/Product";
import Portraits from "./components/pages/Portraits";
import Architecture from "./components/pages/Architecture";
import Events from "./components/pages/Events";
import Multimedia from "./components/pages/Multimedia";

function App() {
  return (
    <main>
      <Router basename="/portfolio">
        <NavBar />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />}/>
            <Route path="/portrait" element={<Portraits />}/>
            <Route path="/architecture" element={<Architecture />}/>
            <Route path="/events" element={<Events />}/>
            <Route path="/multimedia" element={<Multimedia />}/>
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
