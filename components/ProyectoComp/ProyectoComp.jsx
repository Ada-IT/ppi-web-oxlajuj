import { Container, Row, Col, Card } from "react-bootstrap";
import proyectos from "./proyectos";
import ProyectoCard from "../ProyectoCard/ProyectoCard";

const ProyectoComp = () => {
  return (
    <>
      {proyectos.map((card) => {        
        return (          
         <ProyectoCard
            key={card.id}
            img={card.img}            
            titulo={card.titulo}
            texto={card. texto} 
            img2={card.img2}            
            titulo2={card.titulo2}
            texto2={card. texto2}           
            />         
        );
      })}
    </>
  );
};

export default ProyectoComp;