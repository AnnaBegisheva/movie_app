import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import styles from './home-page.module.scss';
import Card from "../Card/Card";

const HomePage = ({ dataStore, filter, isSearch }) => {
    useEffect(() => {
        dataStore.loadData(filter);
    }, []);

    useEffect(() => {
        dataStore.isLoaded = false
        if (isSearch) {
            dataStore.loadData({ 'keyword': dataStore.search })
        } else {
            dataStore.loadData(filter);
        }
    }, [filter, isSearch]);

    if (dataStore.hasErrors) {
        return (
            <div className={styles.error}>
                <h2>Sorry!</h2>
                <p>Server is unavailable</p>
            </div>
        );
    }

    if (dataStore.data.length === 0 && !dataStore.isLoading) {
        return (
            <div className={styles.error}>
                <h2>Sorry!</h2>
                <p>No match</p>
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