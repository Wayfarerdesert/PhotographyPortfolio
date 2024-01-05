import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Arquitecture from "./components/DEPRUEBA/Arquitecture";

function App() {
  return (
    <main>
      <Router>
        <NavBar />
        <Routes>
          <Route>
            <Route>
              <Route path="/" element={<Home />} />
              {/* <Route path="/portfolio/product" element={<Home />}/> */}
              {/* <Route path="/portfolio/portrait" element={<Home />}/> */}
              {/* <Route path="/portfolio/arquitecture" element={<Arquitecture />}/> */}
              {/* <Route path="/portfolio/events" element={<Home />}/> */}
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
