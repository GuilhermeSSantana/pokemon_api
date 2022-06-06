import React from "react";
import Searchbar from "./Search";

function Pokemo() {
  return (
    <div>
      <Searchbar/>
      <div class="type-tex">
        <select id="tipo" required>
          <option selected disabled value="">
            Tipo
          </option>
          <option>Fogo</option>
          <option>Planta</option>
          <option>Eletrico</option>
          <option>Água</option>
          <option>Normal</option>
        </select>
      </div>
    </div>
  );
}

export default Pokemo;
