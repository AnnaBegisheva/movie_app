import { useState } from "react";
import { inject, observer } from "mobx-react";
import styles from './header.module.scss';
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";

const Header = ({ dataStore }) => {
    const [state, setState] = useState('');

    const handleChange = (event) => {
        let value = event.target.value.trim().replace(/ +/g, " ");
        setState(value);
    };

    const handleSubmit = (event) => {
        dataStore.search = state
        setState('')
        event.preventDefault();

    };

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
                <form onClick={handleSubmit} className={styles.form}>
                    <label>
                        <input type="text" value={state} onChange={handleChange} placeholder='Your request' className={styles.input} />
                    </label>
                    <Link to="catalog/search" className={styles.menuLink}>
                        <input type="submit" value="Search" className={styles.submit} />
                    </Link>
                </form>

                <div className={styles.account}>
                    <Link to="#" className={styles.menuLink}>
                        <VscAccount className={styles.icon} />
                    </Link>
                </div>
            </div>
        </div >
    );
}

export default inject(["dataStore"])(observer(Header));