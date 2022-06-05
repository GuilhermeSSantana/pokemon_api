import React from "react";
import "../style/Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>

    <nav className="Nav-01">
      <div className="container">
        <img className="nav-img"
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt=""
        />

        <ul className="nav_menu">
          <li className="nav_item">
            <NavLink to={"/"}>Home</NavLink>
          </li>

          <li className="nav_item">
            <NavLink to={"/Pokemon"}>Pokemons</NavLink>
          </li>
          <li className="nav_item">
            <NavLink to={"/Contact"}>Contato</NavLink>
          </li>
        </ul>
      </div>
    </nav>
    
   
    </div>
  );
}

export default Navbar;
