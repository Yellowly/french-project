import React from "react";
import Laurenti_2019_ from './Laurenti_2019_(52).jpg'; 

const Geography = () => {
  return (
    <div>
        <div className="Page-header">
        <img src={Laurenti_2019_}></img> 
        <div className="Centered-Text"><h1>Geographie</h1></div>
        </div>
        <div className="Box">
            <div className="RightImageBox">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Occitanie_region_map_%28DPJ-2020%29.svg/1878px-Occitanie_region_map_%28DPJ-2020%29.svg.png"/>
                <h1>
                    Position Géographique
                </h1>
                <p>
                    L'occitanie est dans le sud de la France, à côté de PACA, de la Nouvelle Aquitaine et de l'Espagne. C'est aussi la deuxième plus grande région de France
                </p>
            </div>
        </div>
        <div className="Box">
            <div className="LeftImageBox">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Glacier_Mont_Perdu.jpg"/>
                <h1>
                    Paysage
                </h1>
                <p>
                La géographie de l'Occitanie a beaucoup de variété. L'Occitanie a des montagnes, forêts, garrigues, plaines et littoral. Les montagnes du Massif central sont au nord et les montagnes des Pyrénées près de l'Espagne au sud. La variété des paysages signifie que tout le monde peut trouver des paysages à apprécier! 
                </p>
            </div>
        </div>
        <div className="Box">
            <div className="RightImageBox">
                <img src="https://www.bestereistijd.nl/uploads/2019/07/4041625-640x360.jpg"/>
                <h1>
                    Climat
                </h1>
                <p>
                    Avec les paysages, il a un grande variété de climats en Occitanie. Le littoral a un chaud climat méditerranéen et est un régions avec plus ensoleillées de France. Les Pyrénées et le Massif Central ont des climats de montagne plus venteux et plus froids.
                </p>
            </div>
        </div>
        <div className="Box">
            <div className="LeftImageBox">
                <img src="https://thumbs.dreamstime.com/b/administrative-political-vector-map-occitanie-region-flag-france-administrative-political-vector-map-117000490.jpg"/>
                <h1>
                    Différents Départements
                </h1>
                <p>
                    L'occitanie compte le plus de départements en France, avec 13 : Ariège, Aude, Aveyron, Gard, Haute-Garonne, Gers, Hérault, Lot, Lozère, Hautes-Pyrénées, Pyrénées-Orientales, Tarn et Tarn-et-Garonne
                </p>
            </div>
        </div>
        <div className="Box">
            <div className="RightImageBox">
                <img src="https://images.ladepeche.fr/api/v1/images/view/5ee346993e454609e97b12b6/large/image.jpg?v=1"/>
                <h1>
                    Population de plus Grandes Villes
                </h1>
                <p>
                    L'Occitanie a deux métropoles: Toulouse Métropole, avec un population de 471,941, et Montpellier Méditerranée Métropole avec un population de 277,639. 
                </p>
            </div>
        </div>
    </div>
  );
};
  
export default Geography;