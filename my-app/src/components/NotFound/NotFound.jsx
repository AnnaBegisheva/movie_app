import { Link } from 'react-router-dom';
import styles from './not-found.module.scss';

function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.bgText}>404</p>
                <p className={styles.text}>Ooops!</p>
                <p className={styles.textSmall}>Sorry, page not found</p>
                <Link to="/" className={styles.link}>
                    Back Home
                </Link>
            </div>
        </div>
    );
}

export default NotFound;