import React from "react";
  
const Tourism = () => {
  return (
    <div>
        <div className="Page-header">
            <img src={"https://www.touropia.com/gfx/d/occitanie-france/lourdes.jpg"}></img> 
            <div className="Centered-Text"><h1>Tourism</h1></div>
        </div>
        <div className="Box">
            <div className="RightImageBox">
            <img src="https://www.touropia.com/gfx/d/occitanie-france/narbonne.jpg"/>

                <h1>
                    Attractions
                </h1>
                <p>
                L'Occitanie possède beaucoup de attractions. Des monuments historiques, par exemple la Pointe du Gard, Carcassonne, Lourdes, Narbonne, ou encore la ville de Nîmes ou Aigues-mortes. Il y a des musées, comme le Musée Fabre, le Musée d'art Hyacinthe Rigaud, Le Village de Pêcheurs ou le Musée d'histoire naturelle. Beaucoup de les événements culturels, par exemple les joutes nautiques et la corrida.                </p>
            </div>
        </div>
        <div className="Box">
            <div className="LeftImageBox">
            <img src="https://images.france.fr/zeaejvyq9bhj/5R3hnE4wRUE0iyMoQY4CU4/6a05b8a1aff66dfa85e497b149bfe131/cathare.jpg"/>

                <h1>
                    Sports et Recreation
                </h1>
                <p>
                L'Occitanie a beaucoup de possibilités d'activités sportives et récréatives. Il a beaucoup de parcs naturels, par exemple le parc national des Pyrénées, où les gens peuvent faire du vélo, du camping, du canoë et de la randonnée.                </p>
            </div>
        </div>
        <div className="Box">
            <div className="RightImageBox">
            <img src="https://www.laregion.fr/IMG/jpg/festum.jpg"/>

                <h1>
                Statistiques 
                </h1>
                <p>
                    Occitanie a beaucoup de tourisme, avec 166,000 visiteurs chaque année! Tourisme est tres important for le economie de Occitanie aussi, avec 25% de emploi etre pour tourisme.
                </p>
            </div>
        </div>
    </div>
  );
};
  
export default Tourism;