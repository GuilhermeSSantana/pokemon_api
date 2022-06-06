import React from "react";
import Searchbar from "./Search";
import "../style/Pokemon.css";

function Pokemo() {
  return (
    <div className="container-poke">
      <div className="text-top">
        <h2>Mais de 250 Pokemons para você escolher o seu favorito</h2>
      </div>
      <div className="search">
        <Searchbar />
      </div>
      <ul className="text-select">
        <li class="type-tex">
          <select id="tipo" required>
            <option selected disabled value="">
              Tipo
            </option>
            <option>Fogo</option>
            <option>Eletrico</option>
            <option>Água</option>
            <option>Normal</option>
          </select>
        </li>
        <li class="type-tex">
          <select id="ataque" required>
            <option selected disabled value="">
              Ataque
            </option>
            <option>Rápido</option>
            <option>Principal</option>
          </select>
        </li>
        <li class="type-tex">
          <select id="defesa" required>
            <option selected disabled value="">
              Defesa
            </option>
          </select>
        </li>
      </ul>
    </div>
  );
}

export default Pokemo;
