import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

const TOKEN = 'BQCRxbKIj0gdZ4SPRNSuMQVi2RiobMM6X5JWblmFWGSYb34RS-TP3w1M_AywNUEP0lygdHZ86yDsgxl4EPEnaA';

@Injectable()
export class SpotifyService {

    artistas:any[] = [];

    urlBusqueda:string = "https://api.spotify.com/v1/search"
    urlArtista:string = "https://api.spotify.com/v1/artists"

    constructor(private http:Http) { }

    getArtistas(texto:string){
        let headers = new Headers();

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

    getArtista(id:string){
        let headers = new Headers();

        headers.append('Authorization', 'Bearer ' + TOKEN);
        let query= `/${ id }`;
        let url = this.urlArtista + query;

        return this.http.get(url, { headers })
            .map( res => {
                console.log(res.json());

                return res.json();
            })
    }
    getTop(id:string){
        let headers = new Headers();

        headers.append('Authorization', 'Bearer ' + TOKEN);
        let query= `/${ id }/top-tracks?country=ES`;
        let url = this.urlArtista + query;

        return this.http.get(url, { headers })
            .map( res => {
                console.log(res.json().tracks);

                return res.json().tracks;
            })
    }

}
