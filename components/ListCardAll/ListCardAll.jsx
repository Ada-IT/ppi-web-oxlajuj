import CardComponent from "../CardComponent/CardComponent";
import data from "./dataAll";

const ListCardAll = () => {
  return (
    <>
      {data.map((card) => {
        return (
          <CardComponent
            img={card.img}
            key={card.id}
            nombre={card.nombre}
            cargo={card.cargo}
            btn=""
          />
        );
      })}
    </>
  );
};

export default ListCardAll;
