import { makeAutoObservable, runInAction } from "mobx";
import axios from 'axios';

const headers = {
    'Content-Type': 'application/json',
    'X-API-KEY': 'f08ed668-46da-4bf5-b331-0266276f96e5',
}

export default class filmStore {
    data = [];
    film = {};
    isLoaded = false;
    isLoading = false;
    hasErrors = false;
    filter = {};
    search = '';
    isSearch = false
    genres = [];
    countries = []
    filtersIsLoaded = false;
    filtersIsLoading = false;

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
                headers: headers,
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
                this.isSearch = false;
                this.search = ''
                this.filters = []
            });
        }

    };


    // get film data
    setFilmData = async (id) => {
        try {
            const resp = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
                headers: headers
            })
            if (resp.status === 200) {
                runInAction(() => {
                    this.film = resp.data;
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
        }
    };


    // filter
    setFilter = (filter) => {
        if (filter === this.filter) {
            return
        }
        this.filter = filter;
    };

    loadFilters = async () => {
        if (this.filtersIsLoaded || this.filtersIsLoading) {
            return;
        }

        try {
            this.isLoading = true;
            const resp = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/filters', {
                headers: headers,
            });
            if (resp.status === 200) {
                runInAction(() => {
                    this.genres.push('', ...resp.data.genres)
                    this.countries.push('', ...resp.data.countries)
                });
            } else {
                throw new Error(resp.statusText);
            }
        } catch (error) {
            runInAction(() => {
                this.hasErrors = true;
            });
        } finally {
            runInAction(() => {
                this.filtersIsLoaded = true;
                this.filtersIsLoading = false;
            });
        }
    };
}