import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import style from "../carousel/Carrousel.module.css"
const CarouselComponent = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="w-100">
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src="./images/1.jpg?text=First slide&bg=black"
                    alt="First slide"
                />

                <Carousel.Caption>
                    {/*                     <h3 className={style.carTitle}>First slide label</h3>
 */}                    <p className={style.carText}>Nulla vitae elit libero.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src="./images/2.jpg?text=First slide&bg=black"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    {/*     <h3>Second slide label</h3> */}
                    <p>Lorem ipsum dolor sit amet.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src="./images/3.jpg?text=First slide&bg=black"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    {/*     <h3>Third slide label</h3> */}
                    <p>
                        Praesent commodo cursus magna.
          </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel >
    );
}


export default CarouselComponent;
