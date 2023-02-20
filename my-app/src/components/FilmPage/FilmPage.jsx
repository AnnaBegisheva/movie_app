import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { inject, observer } from "mobx-react";
import styles from './film-page.module.scss';

const FilmPage = ({ dataStore }) => {
    const { id } = useParams();

    useEffect(() => {
        dataStore.setFilmData(id);
    }, []);

    return (

        <div className={styles.container}>
            <h1 className={styles.title}>{dataStore.film.nameOriginal || dataStore.film.nameRu}</h1>
            <div className={styles.imageBlock}>
                <img src={dataStore.film.posterUrl} alt='poster' className={styles.image} />
            </div>
            <div className={styles.content}>
                <p> <span className={styles.text}> Описание: </span>{dataStore.film.description ? dataStore.film.description : `n/a`}</p>
                <p><span className={styles.text}> Жанр: </span>{dataStore.film.genresStr ? dataStore.film.genresStr : `n/a`}</p>
                <p><span className={styles.text}> Год: </span>{dataStore.film.startYear ? dataStore.film.startYear : `n/a`}</p>
                <p><span className={styles.text}> Страна: </span>{dataStore.film.countriesStr ? dataStore.film.countriesStr : `n/a`}</p>
                <p><span className={styles.text}> Продолжительность: </span>{dataStore.film.filmLength ? dataStore.film.filmLength : `n/a`}</p>
                <p><span className={styles.text}> Рейтинг IMdb: </span>{dataStore.film.ratingImdb ? dataStore.film.ratingImdb : `n/a`} </p>
                <button className={styles.button}>Смотреть</button>
            </div>
        </div>

    );
}

export default inject(["dataStore"])(observer(FilmPage));