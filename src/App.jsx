import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Arquitecture from "./components/pages/Arquitecture"


function App() {

  return (
    <main>
      <NavBar />
      {/* <Routes>
        <Route>
          <Route>
            <Arquitecture />
          </Route>
        </Route>
      </Routes> */}
      <Footer />
    </main>
  );
}

export default App;
