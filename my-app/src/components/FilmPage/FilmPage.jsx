import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { inject, observer } from "mobx-react";
import styles from './film-page.module.scss';

const FilmPage = ({ dataStore }) => {
    const { id } = useParams();

    useEffect(() => {
        dataStore.setFilmData(id);
    }, []);

    useEffect(() => {
        console.log(dataStore.film.countries)
    }, [dataStore]);



    return (

        <div className={styles.container}>
            <h1>{dataStore.film.nameOriginal || dataStore.film.nameRu}</h1>
            <img src={dataStore.film.posterUrl} alt='poster' />
            <p>{dataStore.film.ratingImdb}</p>
            <p>{dataStore.film.description}</p>
            <p>{dataStore.film.startYear}</p>
            <p>{dataStore.film.countriesStr}</p>
            <p>{dataStore.film.genresStr}</p>
            <p>{dataStore.film.filmLength}</p>
        </div>

    );
}

export default inject(["dataStore"])(observer(FilmPage));