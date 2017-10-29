import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/classes';
import { ListaTareasService } from '../../app/services/lista-tareas.service';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'app-detalle',
    templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

    i:number;
    lista:Lista;

    constructor(
        public navCtrl:NavController,
        public navParams:NavParams,
        public _listaTareasService:ListaTareasService,
        public alertCtrl: AlertController
    ) {
        console.log(navParams);

        this.i = navParams.get("i");
        this.lista = navParams.get("lista");
    }

    ngOnInit() {}

    cambiarEstado(item:ListaItem) {
        item.completado = !item.completado;

        let estado = true;

        for (let item of this.lista.items) {
            if (!item.completado) {
                estado = false;
                break;
            }
        };

        this.lista.terminada = estado;    
        this._listaTareasService.guardarDatos();
    }

    borrarLista() {
        let confirm = this.alertCtrl.create({
            title: this.lista.nombre,
            message: '¿Está seguro de que desea borrar la lista?',
            buttons: ['No',
                {
                    text: 'Sí',
                    handler: () => {
                        // console.log('Borrar lista');
                        this._listaTareasService.borrarLista(this.i);
                        this.navCtrl.pop();
                    }
                }
            ]
        });
        confirm.present();

    }
}
