import React, { useEffect, useState } from "react";
//link le fichier css Compteur.css a notre composant en l'important
import "../styles/Compteur.css";
//import le composant decreOrIncrement
import DecreOrIncrement from "./DecreOrIncrement";

function Compteur() {
  /**
   * le hook useState permet de gerer les états(données) d'un composant,
   * cela permet a Reactjs de pouvoir mieux gerer leur mises a jour a chaque
   * changement et ou rendu.
   */
  const [number, setNumber] = useState(null);
  const decrementer = () => {
    let values = number - 1; //integer des nombre entier
    setNumber(values);
    /**
     * localStorage est un espace de stockage de données intégrer aux navigateur,
     * permet donc de stocker des données en local dans le navigateur de l'utilisateur
     * fonctionne avec un systeme de key/value(clé/valeur),
     *
     * la methode setItem(key, value) de localSotorage permet d'envoyer des données dans le local storage
     */
    localStorage.setItem("value", values ? values.toString() : 0);
  };

  const incrementer = () => {
    let values = number + 1;
    setNumber(values);

    localStorage.setItem("value", values ? values.toString() : 0);
  };

  const retrieveStoredValue = () => {
    console.log("la page est charger");
    /**
     * la methode getItem("key") de localStorage permet donc de recuperer une données stocker dans
     * le local storage grace a sa key(ou clé en français )
     */
    const stored = localStorage.getItem("value");
    setNumber(stored ? parseInt(stored) : 0); // cette syntaxe est égal a la condition if juste en bas
    if (stored != null) {
      console.log("stored n'est pas vide");
      setNumber(stored);
    } else {
      console.log("stored est vide");
      setNumber(0);
    }
  };

  /**
 * useEffect est executé avant le rendu initial et après chaque mise à jour du composant.
 * vous pouvez par exemple l'utiliser avant le rendu de la page, pour récuperer les
  informations de l'utilisateur aux backend et afficher ces informations.
 */
  useEffect(() => {
    retrieveStoredValue();
  }, []);
  return (
    //className permet de données des noms a nos élements jsx(ou html)
    //pour pouvoir les identifier ou les récuperer dans le css et les styliser
    <div className="Compteur">
      <h1>{number}</h1>
{      /**
       * le composant DecreOrIncrement est un autre composant,
       * il est importé dans le fichier Compteur.jsx
       * on lui passe les fonctions incrementer() et decrementer() dont il à besoin
       * 
       */}
      <DecreOrIncrement incrementer={incrementer} decrementer={decrementer} />
    </div>
  );
}

export default Compteur; // permet aux autres élement de pouvoir importer et utiliser a ma fonction Compteur()
