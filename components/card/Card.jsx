import React from 'react';
/* import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; */
import style from "./Card.module.css";

const Card = () => {

    return (

        <article className={style.card}>
            <div className={style.cardHeader}>
                <div type="button"><img className={style.cardImg} src="./images/b.jpg" /></div>
            </div>
            <div className={style.cardContent}>
                <h3 className="card--content-title" >
                    Card
                </h3>
                <span className={style.cardContentRating}>
                    {/* <FontAwesomeIcon icon={faStar} /> {data.rating} */}
                </span>
            </div>
        </article>
    );
}

export default Card;