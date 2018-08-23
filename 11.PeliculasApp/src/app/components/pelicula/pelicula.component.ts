import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-pelicula',
    templateUrl: './pelicula.component.html',
    styles: []
})
export class PeliculaComponent {

    movie_id: string;
    pelicula: any;

    constructor(private _pelis: PeliculasService,
        private router: Router,
        private ruta: ActivatedRoute,
        private _location: Location) {
        this.ruta.params.subscribe(params => {
            this.movie_id = params['movie_id'];
            this._pelis.getMovie(this.movie_id).subscribe(
                data => {
                    this.pelicula = data;

                    console.log(this.pelicula);
                }
            );
        });
    }

    volver() {
        this._location.back();
    }
}
