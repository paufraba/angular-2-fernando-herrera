import { Injectable } from '@angular/core';

import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeliculasService {

    private apikey = '1c9b1625515dabb765b2f96707b57c1c';
    private urlMoviedb = 'https://api.themoviedb.org/3';
    // poster_sizes: [
    //     "w92",
    //     "w154",
    //     "w185",
    //     "w342",
    //     "w500",
    //     "w780",
    //     "original"
    // ]
    public img_base_url = 'https://image.tmdb.org/t/p/';

    constructor(private jsonp: Jsonp) { }

    getPopulares() {

        const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}` +
            `&language=es&callback=JSONP_CALLBACK&region=ES`;

        return this.jsonp.get(url)
            .map(res => res.json());
    }

    buscarPelicula(texto: string, pagina = 1) {

        const url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&` +
            `api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK&page=${pagina}`;

        return this.jsonp.get(url)
            .map(res => res.json());
    }

    getMovie(movie_id: string) {
        const url = `${this.urlMoviedb}/movie/${movie_id}?api_key=${this.apikey}` +
            `&language=es&callback=JSONP_CALLBACK`;

        return this.jsonp.get(url)
            .map(res => res.json());
    }

    getCartelera() {
        const url = `${this.urlMoviedb}/movie/now_playing?api_key=${this.apikey}` +
            `&language=es&callback=JSONP_CALLBACK&region=ES`;

        return this.jsonp.get(url)
            .map(res => res.json());
    }

    getPopularesNinos() {

        const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}` +
            `&language=es&callback=JSONP_CALLBACK&region=ES&certification_country=ES` +
            `&certification=APTA`;

        return this.jsonp.get(url)
            .map(res => res.json());
    }

}
