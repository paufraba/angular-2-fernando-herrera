import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import 'rxjs/Rx';

@Injectable()
export class HeroesService {

    heroesURL:string = "https://heroesapp-a1cab.firebaseio.com/heroes";

    constructor(private http:Http) { }

    nuevoHeroe (heroe:Heroe) {
        let body = JSON.stringify(heroe);
        let headers = new Headers({
            'Content-Type':'application/json'
        });

        return this.http.post(this.heroesURL + ".json", body, {headers:headers})
            .map( res => {
                console.log(res.json());
                return res.json();
            });
    }

    actualizarHeroe (heroe:Heroe, key$:string) {
        let body = JSON.stringify(heroe);
        let headers = new Headers({
            'Content-Type':'application/json'
        });

        return this.http.put(this.heroesURL + `/${key$}.json`, body, {headers:headers})
            .map( res => {
                console.log(res.json());
                return res.json();
            });
    }

    getHeroe (key$:string) {

        return this.http.get(this.heroesURL + `/${key$}.json`)
            .map( res => {
                // console.log(res.json());
                return res.json();
            });
    }

    getHeroes () {

        return this.http.get(this.heroesURL + ".json")
            .map( res => {
                // console.log(res.json());
                return res.json();
            });
    }

    borrarHeroe(key$:string) {
        return this.http.delete(this.heroesURL + `/${key$}.json`)
            .map( res => {
                // console.log(res.json());
                return res.json();
            });
    }

}
