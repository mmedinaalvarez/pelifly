import React from "react";
import CardMovie from "../CardMovie/CardMovie";
import ListMovie from "../ListMovie/ListMovie";

const ItemListContainer = () => {
  return (
    <div className="UserSection">
      {/* <CardMovie 
            name="Blondi"
            date="Estreno"
            description="Es una película que, en tono de comedia, abre imperceptiblemente temas enormes y trascendentes. Mientras relata la historia particular y cotidiana del vínculo de una madre con su hijo."
            img="../src/assets/img/movies/blondi.jpg"  
          />
          <CardMovie 
            name="Disco de oro"
            date="Estreno"
            description="Biopic del referente musical Neil Bogart, un soñador judío que, empezando con muchas ganas y poco dinero,"
            img="../src/assets/img/movies/discodeoro.jpg"  
          />
          <CardMovie 
            name="SPIDERMAN A TRAVES DEL SPIDERVERSO"
            date="Estreno"
            description="Después de reunirse con Gwen Stacy, Spider-Man, el amigable vecino de Brooklyn, es transportado a través del Multiverso."
            img="../src/assets/img/movies/spiderman.jpg"
          /> */}
      <ListMovie />
    </div>
  );
};

export default ItemListContainer;
