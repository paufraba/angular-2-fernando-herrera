import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import { MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EditarMapaComponent } from './editar-mapa.component';

@Component({
    selector: 'app-mapa',
    templateUrl: './mapa.component.html',
    styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

    marcadores: Marcador[] = [];

    lat = 39.2033565;
    lng = -0.3113277999999582;

    constructor(public snackBar: MatSnackBar,
        public dialog: MatDialog) {
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

    editarMarcador(marcador: Marcador) {
        const dialogRef = this.dialog.open(EditarMapaComponent, {
            width: '250px',
            data: { titulo: marcador.titulo, descripcion: marcador.descripcion }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);

            if (result) {
                marcador.titulo = result.titulo;
                marcador.descripcion = result.descripcion;

                this.guardarStorage();

                this.snackBar.open('Marcador actualizado', 'Cerrar', { duration: 2000 });
            }
        });
    }

}
