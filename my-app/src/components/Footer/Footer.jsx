import { TiMessages } from "react-icons/ti";
import { BiPhoneCall } from "react-icons/bi";
import styles from './footer.module.scss';
import { Link } from "react-router-dom";

const Footer = (props) => {

    return (
        <div className={styles.container}>
            <section className={styles.sectionAbout}>
                <h3 className={styles.sectionTitle}>About</h3>
                <ul className={styles.about}>
                    <li className={styles.aboutItem} onClick={props.onClick}>
                        <Link to="/catalog/liked" className={styles.link}>
                            About us
                        </Link>
                    </li>
                    <li className={styles.aboutItem} onClick={props.onClick}>
                        <Link to="/catalog/liked" className={styles.link}>
                            Info for partners
                        </Link>
                    </li>
                    <li className={styles.aboutItem} onClick={props.onClick}>
                        <Link to="/catalog/liked" className={styles.link}>
                            Advertising
                        </Link>
                    </li>
                    <li className={styles.aboutItem} onClick={props.onClick}>
                        <Link to="/catalog/liked" className={styles.link}>
                            User agreement
                        </Link>
                    </li>
                    <li className={styles.aboutItem} onClick={props.onClick}>
                        <Link to="/catalog/liked" className={styles.link}>
                            Privacy policy
                        </Link>
                    </li>
                </ul>
            </section>
            <section className={styles.sectionNav}>
                <h3 className={styles.sectionTitle}>Navigation</h3>
                <ul className={styles.nav}>
                    <li className={styles.navItem} onClick={props.onClick}>
                        <Link to="/" className={styles.link}>
                            Home
                        </Link>
                    </li>
                    <li className={styles.navItem} onClick={props.onClick}>
                        <Link to="/catalog/liked" className={styles.link}>
                            My collection
                        </Link>
                    </li>
                    <li className={styles.navItem} onClick={props.onClick}>
                        <Link to="/catalog/films" className={styles.link}>
                            Movies
                        </Link>
                    </li>
                    <li className={styles.navItem} onClick={props.onClick}>
                        <Link to="/catalog/series" className={styles.link}>
                            Series
                        </Link>
                    </li>
                    <li className={styles.navItem} onClick={props.onClick}>
                        <Link to="/catalog/cartoons" className={styles.link}>
                            Cartoons
                        </Link>
                    </li>
                </ul>
            </section>
            <section className={styles.sectionContacts}>
                <h3 className={styles.sectionTitle}>Contact us</h3>
                <ul className={styles.contact}>
                    <li className={styles.contactItem} onClick={props.onClick}>
                        <Link to="#" className={styles.link}>
                            <TiMessages className={styles.icon} />
                        </Link>
                    </li>
                    <li className={styles.contactItem} onClick={props.onClick}>
                        <Link to="#" className={styles.link}>
                            <BiPhoneCall className={styles.icon} />
                        </Link>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Footer;