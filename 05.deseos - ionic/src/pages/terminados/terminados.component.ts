import { Component, OnInit } from '@angular/core';
import { ListaTareasService } from '../../app/services/lista-tareas.service';
import { NavController } from 'ionic-angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
    selector: 'app-terminados',
    templateUrl: 'terminados.component.html',
})
export class TerminadosComponent implements OnInit {
    constructor(private _listaTareasService:ListaTareasService, private navController: NavController) {
    }

    ngOnInit() {}

    verDetalle(lista, i) {
        this.navController.push(DetalleComponent, {lista, i});
    }
}
