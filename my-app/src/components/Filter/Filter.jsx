import React, { useEffect, useState } from "react";
import styles from './filter.module.scss';
import { inject, observer } from "mobx-react";


const Filter = ({ dataStore }) => {
    const [genre, setGenre] = useState(0);
    const [country, setCountry] = useState(0);
    const [rating, setRating] = useState("");
    const [year, setYear] = useState("");

    useEffect(() => {
        dataStore.loadFilters();
    }, []);

    const handleSelectGenre = (event) => {
        // if (event.target.value === '') {
        //     setGenre(undefined)
        // } else {
        //     setGenre(+event.target.value)
        // }
        setGenre(+event.target.value)

    };

    const handleSelectCountry = (event) => {
        // if (event.target.value === '') {
        //     setCountry(undefined)
        // } else {
        //     setCountry(+event.target.value)
        // }
        setCountry(+event.target.value)
    };

    const handleSelectRating = (event) => {
        setRating(event.target.value)
    };


    const handleSelectYear = (event) => {
        setYear(event.target.value);
        if (event.target.value === '') {
            dataStore.minYear = undefined
            dataStore.maxYear = undefined
        } else if (event.target.value === "Earler") {
            dataStore.maxYear = 2009
        } else {
            dataStore.minYear = +event.target.value
        }
    };

    const handleSubmit = (event) => {
        let params = {}
        if (genre !== 0) {
            params.genres = genre
        }
        if (country !== 0) {
            params.countries = country
        }
        if (rating !== "") {
            if (rating === "less 6") {
                params.ratingTo = 6
            }
            else {
                params.ratingFrom = +rating
            }
        }
        if (year !== "") {
            if (year === "Earler") {
                params.yearTo = 2009
            } else {
                params.yearFrom = +year
            }
        }
        dataStore.isLoaded = false
        dataStore.loadData(params)
        event.preventDefault();
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>

                <label>
                    <span className={styles.selectName}>Genres:</span>
                    <select className={styles.select} onChange={handleSelectGenre}>
                        {dataStore.genres.map((item) => (
                            <option value={item.id}>{item.genre}</option>
                        ))}
                    </select>
                </label>

                <label>
                    <span className={styles.selectName}>Country:</span>
                    <select className={styles.select} onChange={handleSelectCountry}>
                        {dataStore.countries.map((item) => (
                            <option value={item.id}>{item.country}</option>
                        ))}
                    </select>
                </label>

                <label>
                    <span className={styles.selectName}>IMDb rating:</span>
                    <select className={styles.select} onChange={handleSelectRating}>
                        <option value="0"></option>
                        <option value="less 6">Less than 6</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                </label>

                <label>
                    <span className={styles.selectName}>Year:</span>
                    <select className={styles.select} onChange={handleSelectYear}>
                        <option value="0"></option>
                        <option value="Earler">Earler</option>
                        <option value="2010">2010</option>
                        <option value="2012">2012</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </label>

                <input type="submit" value="Submit" className={styles.submit} />
            </form>
        </div>
    );
}

export default inject(["dataStore"])(observer(Filter));