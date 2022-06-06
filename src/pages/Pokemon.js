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
      <div className="container-tex">
        <div class="type-tex">
          <select id="tipo" required>
            <option selected disabled value="">
              Tipo
            </option>
            <option>Fogo</option>
            <option>Eletrico</option>
            <option>Água</option>
            <option>Normal</option>
          </select>
        </div>
        <div class="type-ataque">
          <select id="ataque" required>
            <option selected disabled value="">
              Ataque
            </option>
            <option>rápido</option>
            <option>principal</option>
          </select>
        </div>
        <div class="type-defesa">
          <select id="defesa" required>
            <option selected disabled value="">
              Defesa
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Pokemo;
