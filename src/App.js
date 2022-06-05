import "./App.css";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div>
      <div className="Navbar">
        <Navbar/>
      </div>
      <div className="home-body">
        <Home />
      </div>
    </div>
  );
}

export default App;
