import "./App.css";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon"
import Navbar from "./pages/Navbar";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar/> <Home/></>}/>
          <Route path="/Pokemon" element={<><Navbar/>  <Pokemon/> </>}/>
          <Route path="/Contact" element={<><Navbar/>  <Contact/></>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
