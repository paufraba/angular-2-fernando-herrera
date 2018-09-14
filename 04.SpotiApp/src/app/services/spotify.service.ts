import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const TOKEN = 'BQAjyh9R9xrVyzX3A4IgQsQqNl8Zt42YkvbMFnJUUXwzPbuqUfhK0IEIPAuyPonT0m0rXIq7NAIVxeA666o';

@Injectable()
export class SpotifyService {

    artistas: any[] = [];

    urlBusqueda = 'https://api.spotify.com/v1/search';
    urlArtista = 'https://api.spotify.com/v1/artists';

    constructor(
        private http: Http,
        private httpClient: HttpClient) { }

    getNovedades() {
        const headers = new HttpHeaders({
            'Authorization': 'Bearer ' + TOKEN
        });
        return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases', { headers });
    }

    getArtistas(texto: string) {
        const headers = new Headers();

        headers.append('Authorization', 'Bearer ' + TOKEN);
        const query = `?q=${texto}&type=artist`;
        const url = this.urlBusqueda + query;

        return this.http.get(url, { headers })
            .map(res => {
                // console.log(res.json().artists);

                this.artistas = res.json().artists.items;
                console.log(this.artistas);

                return res.json().artists.items;
            });
    }

    getArtista(id: string) {
        const headers = new Headers();

        headers.append('Authorization', 'Bearer ' + TOKEN);
        const query = `/${id}`;
        const url = this.urlArtista + query;

        return this.http.get(url, { headers })
            .map(res => {
                console.log(res.json());

                return res.json();
            });
    }

    getTop(id: string) {
        const headers = new Headers();

        headers.append('Authorization', 'Bearer ' + TOKEN);
        const query = `/${id}/top-tracks?country=ES`;
        const url = this.urlArtista + query;

        return this.http.get(url, { headers })
            .map(res => {
                console.log(res.json().tracks);

                return res.json().tracks;
            });
    }



}
