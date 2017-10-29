import { Injectable } from '@angular/core';
import { Lista } from '../classes/lista';

@Injectable()
export class ListaTareasService {
    listas: Lista[] = [];

    constructor() {
        // let lista1 = new Lista('Supermercado');
        // let lista2 = new Lista('Juegos');
        //
        // this.listas.push(lista1);
        // this.listas.push(lista2);

        this.cargarDatos();

        console.log('Servicio iniciado');
    }

    guardarDatos() {
        localStorage.setItem ("deseos", JSON.stringify(this.listas));
    }

    cargarDatos() {
        if (localStorage.getItem("deseos")) {
            this.listas = JSON.parse(localStorage.getItem("deseos"));
        }
    }

    agregarLista(lista:Lista) {
        this.listas.push(lista);
        this.guardarDatos();
    }
    borrarLista(idx:number) {
        this.listas.splice(idx, 1);
        this.guardarDatos();
    }
}
