import { Outlet } from "react-router-dom";
import styles from './layout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {

    return (
        <div className={styles.container}>
            <header>
                <Header />
            </header>
            <main className={styles.main}>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Layout;