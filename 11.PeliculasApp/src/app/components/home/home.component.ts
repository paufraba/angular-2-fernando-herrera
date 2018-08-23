import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent {

    populares: any[];
    cartelera: any[];
    popularesNinos: any[];

    constructor(private _pelis: PeliculasService) {
        this._pelis.getPopulares().subscribe(data => {
            // console.log(data);
            this.populares = data.results.slice(0, 9);
            // console.log(this.populares);
        });

        this._pelis.getCartelera().subscribe(data => {
            console.log(data);
            this.cartelera = data.results.slice(0, 9);
            console.log(this.cartelera);
        });

        this._pelis.getPopularesNinos().subscribe(data => {
            // console.log(data);
            this.popularesNinos = data.results.slice(0, 9);
            // console.log(this.populares);
        });
    }

}
