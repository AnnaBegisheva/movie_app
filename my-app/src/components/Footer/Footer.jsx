import { TiMessages } from "react-icons/ti";
import { BiPhoneCall } from "react-icons/bi";
import styles from './footer.module.scss';
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks";

const Footer = () => {

    return (
        <div className={styles.container}>
            <section className={styles.sectionAbout}>
                <h3 className={styles.sectionTitle}>About</h3>
                <ul className={styles.about}>
                    <li className={styles.aboutItem}>
                        <Link to="#" className={styles.link}>
                            About us
                        </Link>
                    </li>
                    <li className={styles.aboutItem}>
                        <Link to="#" className={styles.link}>
                            Info for partners
                        </Link>
                    </li>
                    <li className={styles.aboutItem}>
                        <Link to="#" className={styles.link}>
                            Advertising
                        </Link>
                    </li>
                    <li className={styles.aboutItem}>
                        <Link to="#" className={styles.link}>
                            User agreement
                        </Link>
                    </li>
                    <li className={styles.aboutItem}>
                        <Link to="#" className={styles.link}>
                            Privacy policy
                        </Link>
                    </li>
                </ul>
            </section>
            <section className={styles.sectionNav}>
                <h3 className={styles.sectionTitle}>Navigation</h3>
                <NavLinks
                    menuItem={styles.nav}
                    menuLink={styles.link} />
            </section>
            <section className={styles.sectionContacts}>
                <h3 className={styles.sectionTitle}>Contact us</h3>
                <ul className={styles.contact}>
                    <li className={styles.contactItem}>
                        <Link to="#" className={styles.link}>
                            <TiMessages className={styles.icon} />
                        </Link>
                    </li>
                    <li className={styles.contactItem}>
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