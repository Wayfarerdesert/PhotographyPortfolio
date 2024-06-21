import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Multimedia from "./components/pages/Multimedia";
import {
  Architecture,
  Events,
  Product,
  Portraits,
} from "./components/pages/Photography";

import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <main>
      <Router>
        <NavBar />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio/product" element={<Product />} />
            <Route path="/portfolio/portrait" element={<Portraits />} />
            <Route path="/portfolio/architecture" element={<Architecture />} />
            <Route path="/portfolio/events" element={<Events />} />
            <Route path="/portfolio/multimedia" element={<Multimedia />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
