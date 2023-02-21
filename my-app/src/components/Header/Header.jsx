import { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import styles from './header.module.scss';
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import NavLinks from "../NavLinks/NavLinks";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = ({ dataStore }) => {
    const [state, setState] = useState('');
    // const [matches, setMatches] = useState(
    //     window.matchMedia("(max-width: 768px)").matches
    // )

    // useEffect(() => {
    //     window
    //         .matchMedia("(min-width: 768px)")
    //         .addEventListener('change', e => setMatches(e.matches));
    // }, []);

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

            <div className={styles.headerItem}>
                {/* {matches && <BurgerMenu />}
                {!matches && <NavLinks
                    container={styles.headerItem}
                    menuLink={styles.menuLink}
                    menuuItem={styles.menuItem} />} */}
                <BurgerMenu />
                <NavLinks
                    container={`${styles.headerItem} ${styles.menu}`}
                    menuLink={styles.menuLink}
                    menuuItem={styles.menuItem} />
            </div>
            <div className={styles.headerItem}>
                <form onClick={handleSubmit} className={styles.form}>
                    <label>
                        <input type="text" value={state} onChange={handleChange} placeholder='Your request' className={styles.input} />
                    </label>
                    <Link to="catalog/search">
                        <input type="submit" value="Search" className={styles.submit} />
                    </Link>
                </form>

                <div className={styles.account}>
                    <Link to="/login">
                        <VscAccount className={styles.icon} />
                    </Link>
                </div>
            </div>
        </div >
    );
}

export default inject(["dataStore"])(observer(Header));