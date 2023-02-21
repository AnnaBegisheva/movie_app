import React, { useState } from "react";
import NavLinks from "../NavLinks/NavLinks";
import styles from './burger-menu.module.scss';

const BurgerMenu = (props) => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState(`${styles.burger_bar} ${styles.unclicked}`)
    const [menu_class, setMenuClass] = useState(`${styles.menu} ${styles.hidden}`)
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass(`${styles.burger_bar} ${styles.clicked}`)
            setMenuClass(`${styles.menu} ${styles.visible}`)
        }
        else {
            setBurgerClass(`${styles.burger_bar} ${styles.unclicked}`)
            setMenuClass(`${styles.menu} ${styles.hidden}`)
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div >
            <div className={styles.container}>
                <div className={styles.burger_menu} onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </div>

            <div className={menu_class}>
                <NavLinks container={styles.list}
                    menuLink={styles.menuLink}
                    menuuItem={styles.menuItem}>
                </NavLinks>
            </div>
        </div>
    )
}

export default BurgerMenu;