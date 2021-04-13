import Image from "react-bootstrap/Image";
import style from "./Partners.module.css";
import imgs from "./imgs";
import { Container, Row, Col } from "react-bootstrap";
const Partners = () => {
  return (
    <>
      <div className={style.contentPartners}>
        <div className={style.contentImage}>
          <h1 className={style.textImage}>Estas son nuestras Alianzas</h1>
          {imgs.map((item) => {
            return (
/*             <Col xs={12} sm={6} md={4} lg={3}>
 */              <Image
                src={item.img}
                className={style.img}
              />
/*             </Col>
 */          );
          })}
        </div>
      </div>
    </>
  );
};
export default Partners;
