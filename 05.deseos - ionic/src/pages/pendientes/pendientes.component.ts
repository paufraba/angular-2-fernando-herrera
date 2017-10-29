import { Component, OnInit } from '@angular/core';
import { ListaTareasService } from '../../app/services/lista-tareas.service';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
    selector: 'app-pendientes',
    templateUrl: 'pendientes.component.html',
})
export class PendientesComponent implements OnInit {
    constructor(private _listaTareasService:ListaTareasService, private navController: NavController) {
    }

    ngOnInit() {}

    agregarTarea() {
        this.navController.push(AgregarComponent);
    }

    verDetalle(lista, i) {
        this.navController.push(DetalleComponent, {lista, i});
    }
}
