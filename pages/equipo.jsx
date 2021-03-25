import Hero from "../components/hero/Hero";
import EquipoCard from "../components/EquipoCard/EquipoCard";
import ListCardAll from "../components/ListCardAll/ListCardAll";
import { Container, Row, Col } from "react-bootstrap";

const Team = () => {
  return (
    <>
      <Hero />
      <ListCardAll />
    </>
  );
};

export default Team;
