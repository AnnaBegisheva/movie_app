import { makeAutoObservable, runInAction } from "mobx";
import axios from 'axios';

export default class filmStore {
    data = [];
    film = {};
    isLoaded = false;
    isLoading = false;
    hasErrors = false;
    filter = {};


    constructor() {
        makeAutoObservable(this);
    }

    // load data axios
    loadData = async (params) => {
        if (this.isLoaded || this.isLoading) {
            return;
        }
        try {
            this.isLoading = true;
            const resp = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': '26e7e104-125c-4248-9213-45827986f1e4',
                },
                params: params,
            });
            if (resp.status === 200) {
                runInAction(() => {
                    this.data = resp.data.items
                });
            } else {
                throw new Error(resp.statusText);
            }
        } catch (error) {
            runInAction(() => {
                this.data = [];
                this.hasErrors = true;
            });
        } finally {
            runInAction(() => {
                this.isLoaded = true;
                this.isLoading = false;
            });
        }
    };


    // get film data
    setFilmData = async (id) => {
        const resp = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': '26e7e104-125c-4248-9213-45827986f1e4',
            }
        })
        this.film = resp.data;
        let countries = []
        this.film.countries.forEach(element => {
            countries.push(element.country)
        });
        this.film.countriesStr = countries.join(", ")

        let genres = []
        this.film.genres.forEach(element => {
            genres.push(element.genre)
        });
        this.film.genresStr = genres.join(", ")
    };


    // filter
    setFilter = (filter) => {
        if (filter === this.filter) {
            return
        }
        this.filter = filter;
    };
}