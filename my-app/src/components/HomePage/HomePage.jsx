
import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import styles from './home-page.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Card from "../Card/Card";

const HomePage = ({ dataStore }) => {
    useEffect(() => {
        dataStore.loadData();
    }, []);

    return (
        <div className={styles.container}>
            <header>
                <Header></Header>
            </header>
            <main className={styles.main}>
                {dataStore.data.map((item) => (
                    <Card
                        key={item.kinopoiskId}
                        url={item.posterUrl}
                        id={item.kinopoiskId}
                    ></Card>
                ))}
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
}

export default inject(["dataStore"])(observer(HomePage));