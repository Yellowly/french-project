import React from "react";
  
const Economy = () => {
  return (
    <div>
        <div className="Page-header">
            <img src={"https://rockinredblog.files.wordpress.com/2015/08/southwest-france-chateau-belingard-vineyards.jpg"}></img> 
            <div className="Centered-Text"><h1>Economie</h1></div>
        </div>
        <div className="Box">
            <div className="TopDownLeft">
                <h1>
                    Les Industries
                </h1>
                <p>
                    L'Occitanie compte 37 500 entreprises industrielles, avec de larges filières dans l'aéronautique, les énergies renouvelables et les biotechnologies.                
                </p>
                <img src="https://lafrench-fab.com/app/uploads/2021/09/Capture-decran-2021-09-06-a-18.13.53.jpg"/>
            </div>
            <div className="TopDownRight">
                <h1>
                    L'Agriculture
                </h1>
                <p>
                    L'Occitanie est la 1ère région bio, le vin, et de grandes cultures de France. C'est aussi la 2e région pour l'emploi agricole, avec 140 000 travailleurs permanents.
                </p>
                <br/>
                <img src="https://www.static.inrae.fr/cdn/ff/7UC7zAJuUudQEa9QxuhNDy-gA3coogOBaWqUTqQWMt0/1635274406/public/styles/actu/public/jpg/Ph%C3%A9nomobile%20champs.jpg?itok=ciAgBQmh"/>
                <br/><br/><br/>
            </div>
        </div>
    </div>
  );
};
  
export default Economy;