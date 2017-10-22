import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

    artistas:any[] = [];

    urlBusqueda:string = "https://api.spotify.com/v1/search"
    constructor(private http:Http) { }

    getArtistas(texto:string){
        let headers = new Headers();
        const TOKEN = 'BQAWLKwqlz3R_Rze8FLhTpGuR7ytvKyCsuVp0ewK9rlcUMk-R1aZoqGwqwLAV2FUZeluvEYw5xx1p6a6ax_AoA';

        headers.append('Authorization', 'Bearer ' + TOKEN);
        let query= `?q=${ texto }&type=artist`;
        let url = this.urlBusqueda + query;

        return this.http.get(url, { headers })
            .map( res => {
                // console.log(res.json().artists);

                this.artistas = res.json().artists.items;
                console.log(this.artistas);

                return res.json().artists.items;
            })
    }

}
