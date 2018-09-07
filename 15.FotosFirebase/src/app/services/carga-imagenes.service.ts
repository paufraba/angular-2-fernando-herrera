import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FileItem } from '../models/file-item';

@Injectable({
    providedIn: 'root'
})
export class CargaImagenesService {

    private CARPETA_IMAGENES = 'img';

    constructor(private db: AngularFirestore) { }

    private guardarImagen(imagen: { nombre: string, url: string }) {
        this.db.collection(`${this.CARPETA_IMAGENES}`)
            .add(imagen);
    }

    cargarImagenesFirebase(imagenes: FileItem[]) {
        console.log(imagenes);
    }
}
