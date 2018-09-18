import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';


// El token se genera con Postman
const TOKEN = 'QCVp7Wsh4A8VFru3qfj4T1vXBw2U6BnMpcft9Uah-kaoiYby8UTPX5b50R4zfIt9yQxbOtCoAfBzj5nVOg';

@Injectable()
export class SpotifyService {

    artistas: any[] = [];

    urlArtista = 'https://api.spotify.com/v1/';

    constructor(
        private http: Http,
        private httpClient: HttpClient) { }

    callSpotifyAPI(query: string) {
        const url = `https://api.spotify.com/v1/${query}`;
        const headers = new HttpHeaders({
            'Authorization': 'Bearer ' + TOKEN
        });

        return this.httpClient.get(url, { headers });
    }

    getNovedades() {
        return this.callSpotifyAPI('browse/new-releases')
            .map(data => {
                return data['albums'].items;
            });
    }

    getArtistas(texto: string) {
        return this.callSpotifyAPI(`search?q=${texto}&type=artist`)
            .map(res => {
                this.artistas = res['artists'].items;
                console.log(this.artistas);

                return this.artistas;
            });
    }

    getArtista(id: string) {
        return this.callSpotifyAPI(`artists/${id}`);
    }

    getTop(id: string) {
        return this.callSpotifyAPI(`artists/${id}/top-tracks?country=ES`)
            .map(res => {
                console.log(res['tracks']);

                return res['tracks'];
            });
    }
}
