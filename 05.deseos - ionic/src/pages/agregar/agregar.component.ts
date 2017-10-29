import { Component, OnInit } from '@angular/core';
import { Lista, ListaItem } from '../../app/classes';
import { AlertController, NavController } from 'ionic-angular';
import { ListaTareasService } from '../../app/services/lista-tareas.service';

@Component({
    selector: 'app-agregar',
    templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

    nombreLista: string = "";
    nombreItem: string = "";
    items: ListaItem[] = [];

    constructor(public alertCtrl: AlertController,
        public _listaTareasService:ListaTareasService,
        public navController:NavController) {
    }

    ngOnInit() {}

    agregarItem() {
        if (this.nombreItem.length == 0) {
            return;
        }

        let item = new ListaItem();
        item.nombre = this.nombreItem;

        this.items.push(item);
        this.nombreItem = "";
    }

    borrarItem(idx: number) {
        this.items.splice(idx, 1);
    }

    guardarLista() {
        if (this.nombreLista.length == 0) {

            let alert = this.alertCtrl.create({
                title: 'Nombre lista',
                subTitle: 'Es necesario dar un nombre a la lista',
                buttons: ['OK']
            });
            alert.present();

            return;
        }

        let lista = new Lista(this.nombreLista);
        lista.items = this.items;

        // this._listaTareasService.listas.push(lista);
        this._listaTareasService.agregarLista(lista);
        this.navController.pop();
    }


}
