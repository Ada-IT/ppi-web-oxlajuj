import CardComponent from "../card/CardComponent";
import data from "./data";

const ListCard = () => {
  return (
    <>
      {data.map((card) => {
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
