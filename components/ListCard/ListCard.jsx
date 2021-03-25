import CardComponent from "../CardComponent/CardComponent";
import data from "./data";

const ListCard = () => {
  return (
    <>
      {data.map((card) => {
        if (card.id < 5)
          return (
            <CardComponent key={id} nombre={card.nombre} cargo={card.cargo} />
          );
      })}
    </>
  );
};

export default ListCard;
