import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
//import Navbar from "../components/header/Navbar";
import FormularioContacto from "../components/formularioContacto/formularioContacto";
import Headers from "../containers/header/Header";
import MapaContacto from "../components/mapaContacto/MapaContacto";
import InfoFundacion from "../components/infoFundacion/InfoFundacion";

const Contacto = () => {
    return (    
        <Container >
            <Headers />
            <Image src='./images/contact-bg.jpg' fluid />
            <br />
            <InfoFundacion />
            <FormularioContacto></FormularioContacto>
            <MapaContacto />
        </Container>        
    );
}
export default Contacto;
