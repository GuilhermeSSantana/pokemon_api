import React from "react";
import "../style/Home.css";

function Home() {
  return (
    
    <footer className="footer-container">
      >
      <div className="container-text">
        <div className="text-1">
          <h1>Qual o pokemon você escolheria?</h1>
        </div>
        <div className="text-2">
          Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e
          habilidades.
        </div>
        
      </div>
      <div className="container-fundo">
        <img className="img-fundo" src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pikachu-Pok%C3%A9mon-PNG-983x1024.png" alt="pikachu.fundo"/>
      </div>
    </footer>
  );
}

export default Home;
