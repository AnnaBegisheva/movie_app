
import styles from './card.module.scss';
import { Link } from "react-router-dom";

const Card = (props) => {

    return (
        <div className={styles.container}>
            <Link to={`/catalog/${props.id}`} >
                <img src={props.url} alt="filmPoster" className={styles.image}></img>
            </Link>
        </div>
    );
}

export default Card;