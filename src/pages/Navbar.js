import React from "react";
import "../style/Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Nav">
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
            <NavLink to={"/"}>Pokemons</NavLink>
          </li>
          <li className="nav_item">
            <NavLink to={"/"}>Contato</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
