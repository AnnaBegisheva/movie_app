import { inject, observer } from "mobx-react";
import styles from './header.module.scss';
import { Link } from "react-router-dom";

const Header = ({ dataStore }) => {

    return (
        <div className={styles.container}>
            <ul className={styles.headerItem} >
                <li className={styles.menuItem}>
                    <Link to="/" className={styles.menuLink} >
                        Home
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link to="/catalog/liked" className={styles.menuLink}>
                        My collection
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link to="/catalog/films" className={styles.menuLink}>
                        Movies
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link to="/catalog/series" className={styles.menuLink}>
                        Series
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link to="/catalog/cartoons" className={styles.menuLink}>
                        Cartoons
                    </Link>
                </li>
            </ul>
            <div className={styles.headerItem}>
                <input
                    className={styles.search}
                    type="text"
                // onChange={props.onChange}
                // value={props.state}
                // data-name={props.data}
                ></input>
                <div className={styles.account}>
                    <Link to="/login" className={styles.menuLink}>
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default inject(["dataStore"])(observer(Header));