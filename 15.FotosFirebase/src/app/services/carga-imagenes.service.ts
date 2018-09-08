import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FileItem } from '../models/file-item';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class CargaImagenesService {

    private CARPETA_IMAGENES = 'img';

    constructor(private db: AngularFirestore) { }

    private guardarImagenDB(imagen: { nombre: string, url: string }) {
        this.db.collection(`${this.CARPETA_IMAGENES}`)
            .add(imagen);
    }

    cargarImagenesFirebase(imagenes: FileItem[]) {
        console.log(imagenes);

        const storageRef = firebase.storage().ref();

        for (const item of imagenes) {
            item.estaSubiendo = true;

            if (item.progreso > 0) {
                continue;
            }

            const uploadTask: firebase.storage.UploadTask = storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`)
                .put(item.archivo);

            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot: firebase.storage.UploadTaskSnapshot) => {
                    item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    // console.log(item);
                },
                (error) => console.error('Error al subir a FireBase', error),
                () => {
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        item.url = downloadURL;
                        item.estaSubiendo = false;
                        this.guardarImagenDB({ nombre: item.nombreArchivo, url: item.url });
                    });
                }
            );

        }
    }
}
