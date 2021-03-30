import CardComponent from "../cardComponent/CardComponent";
import data from "./data";

const ListCard = () => {
  return (
    <>
      {data.map((card) => {
        console.log("card", card);
        return (
          <CardComponent
            img={card.img}
            key={card.id}
            nombre={card.nombre}
            cargo={card.cargo}
            btn='Nuestro equipo'
          />
        );
      })}
    </>
  );
};

export default ListCard;
