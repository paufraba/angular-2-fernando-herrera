import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-mapa',
    templateUrl: './mapa.component.html',
    styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

    marcadores: Marcador[] = [];

    lat = 39.2033565;
    lng = -0.3113277999999582;

    constructor(public snackBar: MatSnackBar) {
        if (localStorage.getItem('marcadores')) {
            this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
        }
    }

    ngOnInit() {
    }

    agregarMarcador(evento) {
        console.log(evento);

        const nuevoMarcador = new Marcador(evento.coords.lat, evento.coords.lng);

        this.marcadores.push(nuevoMarcador);
        this.guardarStorage();

        this.snackBar.open('Marcador agregado', 'Cerrar', { duration: 2000 });
    }

    guardarStorage() {
        localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
    }

    borrarMarcador(i: number) {
        this.marcadores.splice(i, 1);
        this.guardarStorage();

        this.snackBar.open('Marcador borrado', 'Cerrar', { duration: 2000 });
    }

}
