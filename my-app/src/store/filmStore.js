import { makeAutoObservable, runInAction } from "mobx";
import axios from 'axios';

export default class filmStore {
    data = [];
    film = {};
    isLoaded = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    // load data axios
    loadData = async () => {
        if (this.isLoaded || this.isLoading) {
            return;
        }

        this.isLoading = true;
        const resp = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': 'f08ed668-46da-4bf5-b331-0266276f96e5',
            }
        })
        runInAction(() => {
            this.data = resp.data.items
            this.isLoading = false;
            this.isLoaded = true;
        });
    };

    // get film data
    setFilmData = async (id) => {
        const resp = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': 'f08ed668-46da-4bf5-b331-0266276f96e5',
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
}