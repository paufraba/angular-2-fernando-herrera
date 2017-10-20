import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

    artistas:any[] = [];

    urlBusqueda:string = "https://api.spotify.com/v1/search"
    constructor(private http:Http) { }

    getArtistas(texto:string){
        let query= `q={ texto }&type=artist`;
        let url = this.urlBusqueda + query;

        return this.http.get(url)
            .map( res => {
                console.log(res);
            })
    }

}
