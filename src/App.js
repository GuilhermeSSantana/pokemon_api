import "./App.css";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon"
import Navbar from "./pages/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar/> <Home/></>}/>
          <Route path="/Pokemon" element={<><Navbar/>  <Pokemon/></>}/>
          <Route path="/Contact" element={<><Navbar/>  <Contact/></>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
