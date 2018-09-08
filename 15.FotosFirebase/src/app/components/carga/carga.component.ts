import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { CargaImagenesService } from '../../services/carga-imagenes.service';

@Component({
    selector: 'app-carga',
    templateUrl: './carga.component.html',
    styles: []
})
export class CargaComponent implements OnInit {

    archivos: FileItem[] = [];
    estaSobreImagen = false;

    constructor(public _ci: CargaImagenesService) { }

    ngOnInit() { }

    cargarImagenes() {
        this._ci.cargarImagenesFirebase(this.archivos);
    }

    limpiarArchivos() {
        this.archivos = [];
    }
}
