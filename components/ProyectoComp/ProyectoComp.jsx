import { Container, Row, Col, Card } from "react-bootstrap";
import proyectos from "./proyectos";
import ProyectoCard from "../ProyectoCard/ProyectoCard";

const ProyectoComp = () => {
  return (
    <>
      {proyectos.map((card) => {        
        return (          
         <ProyectoCard
            img={card.img}            
            titulo={card.titulo}
            texto={card. texto}            
            />         
        );
      })}
    </>
  );
};

export default ProyectoComp;