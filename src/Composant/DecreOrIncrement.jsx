import React from "react";

/**
 * Ce composant a besoin de la fonction incrementer() et decrementer()
 * mais c'est son composant parent qui as ces deux fonction
 * donc le parent doit lui passer ces deux fonction
 * et le composant enfant(DecreOrIncrement) les recupère pour pouvoir les utiliser
 * 
 * les props permet ansi de passer des données, fonction etc de parent à enfant
 */
const DecreOrIncrement = ({ incrementer, decrementer }) => {
  return (
    <div>
      <button onClick={decrementer} className="decrementer">
        Decrementer
      </button>
      <button onClick={incrementer} className="incrementer">
        Incrementer
      </button>
    </div>
  );
};

export default DecreOrIncrement;
