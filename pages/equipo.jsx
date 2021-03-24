import Hero from "../components/hero/Hero";
import CardComponent from "../components/CardComponent/CardComponent";
import data from "../components/ListCard/data";

const Team = () => {
  return (  
    <>
      <Hero />
      {data.map((card) => {                     
            return(
                <CardComponent key={card.id} nombre={card.nombre} cargo={card.cargo} />
            )          
        })}
    </>
  );
};

export default Team;
