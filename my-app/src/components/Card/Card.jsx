
import styles from './card.module.scss';
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Card = (props) => {

    return (
        <div className={styles.container}>
            <figure className={styles.card}>
                <Link to={`/catalog/${props.id}`} >
                    <img src={props.url} alt="filmPoster" className={styles.image}></img>
                    <FaHeart className={styles.icon} />
                    <figcaption className={styles.cardInfo}>
                        <p className={styles.title}>{props.name}</p>
                        <p className={styles.text}>IMDB: {props.rating}</p>
                    </figcaption>
                </Link>
            </figure>
        </div>
    );
}

export default Card;