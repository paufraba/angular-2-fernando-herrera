import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
    selector: 'app-buscar',
    templateUrl: './buscar.component.html',
    styles: []
})
export class BuscarComponent {

    textoBusqueda: string;
    peliculas: any;

    paginador = {
        inicial: 1,
        total: 0,
        actual: 1,
        numeros: []
    };

    constructor(private _pelis: PeliculasService,
        private router: Router,
        private ruta: ActivatedRoute) {
        this.ruta.params.subscribe(params => {
            this.textoBusqueda = params['texto'];
            this.paginador.actual = params['pagina'];

            if (this.paginador.actual == null) {
                this.paginador.actual = 1;
            }

            if (this.textoBusqueda !== '') {
                this._pelis.buscarPelicula(this.textoBusqueda, this.paginador.actual).subscribe(
                    data => {
                        console.log(data);
                        this.peliculas = data.results;
                        // console.log(this.peliculas);

                        this.paginador.total = data.total_pages;
                        this.paginador.numeros = Array.from(
                            Array((this.paginador.total + 1) - this.paginador.inicial).keys()).map(
                            i => this.paginador.inicial + i);
                        console.log(this.paginador);
                    }
                );
            }
        });
    }
}
