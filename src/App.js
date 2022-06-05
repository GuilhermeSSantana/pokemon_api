import "./App.css";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon"
import Navbar from "./pages/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App" style={{width:"100%", height:"100vh"}}>
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar/>  <Home/></>}/>
          <Route path="/Pokemon" element={<><Navbar/>  <Pokemon/></>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
