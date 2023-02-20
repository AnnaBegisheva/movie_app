import React, { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import styles from './home-page.module.scss';
import Card from "../Card/Card";

const HomePage = ({ dataStore, filter }) => {
    useEffect(() => {
        dataStore.loadData(filter);
    }, []);

    useEffect(() => {
        dataStore.isLoaded = false
        dataStore.loadData(filter);
    }, [filter]);

    if (dataStore.hasErrors) {
        return (
            <div className={styles.error}>
                <h2>Sorry!</h2>
                <p>Server is unavailable</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            {dataStore.data.map((item) => (
                <Card
                    key={item.kinopoiskId}
                    url={item.posterUrl}
                    id={item.kinopoiskId}
                    name={item.nameOriginal || item.nameRu}
                    rating={item.ratingImdb ? item.ratingImdb : `n/a`}
                ></Card>
            ))}
        </div>
    );
}

export default inject(["dataStore"])(observer(HomePage));