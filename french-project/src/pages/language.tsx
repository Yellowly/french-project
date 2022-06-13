import React from "react";
  
const Language = () => {
  return (
    <div>
        <div className="Page-header">
            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Dialectes_de_l%27occitan_selon_Pierre_Bec.jpg/310px-Dialectes_de_l%27occitan_selon_Pierre_Bec.jpg"}></img> 
            <div className="Centered-Text"><h1>Langue</h1></div>
        </div>
        <div className="Box">
            <div className="TopDownLeft">
                <h1>
                    Occitan 
                </h1>
                <p>
                L'occitan est toujours enseigné et parlé dans toute l'Occitanie dans six grands dialectes :
                <br/><br/>Lemosin
                <br/>Auvernhat
                <br/>Alpin provençal
                <br/>Provençal
                <br/>Lengadocien
                <br/>Gascon               
                </p>
            </div>
            <div className="TopDownRight">
                <h1>
                    Catalan
                </h1>
                <p>
                Le catalan est encore parlé en Espagne et dans certaines parties de l'Occitanie. Historiquement, c'était un dialecte de l'occitan, et beaucoup de gens le considèrent encore etre.                </p>
                <br/><br/><br/><br/><br/>
            </div>
        </div>
    </div>
  );
};
  
export default Language;