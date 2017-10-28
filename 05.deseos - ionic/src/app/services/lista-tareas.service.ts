import { Injectable } from '@angular/core';
import { Lista } from '../classes/lista';

@Injectable()
export class ListaTareasService {
    listas: Lista[] = [];

    constructor() {
        let lista1 = new Lista('Supermercado');
        let lista2 = new Lista('Juegos');

        this.listas.push(lista1);
        this.listas.push(lista2);

        console.log('Servicio iniciado');
    }
}
