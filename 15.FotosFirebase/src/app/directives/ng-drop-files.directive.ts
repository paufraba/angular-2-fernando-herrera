import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-item';

@Directive({
    selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

    @Input() archivos: FileItem[] = [];
    @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();

    constructor() { }

    @HostListener('dragover', ['$event'])
    public onDragEnter(event: any) {
        this.mouseSobre.emit(true);
        this._prevenirDefecto(event);
    }

    @HostListener('dragleave', ['$event'])
    public onDragLeave(event: any) {
        this.mouseSobre.emit(false);
    }

    @HostListener('drop', ['$event'])
    public onDrop(event: any) {
        const dataTransfer = this._getDataTransfer(event);

        if (!dataTransfer) {
            return;
        }

        this._extraerArchivos(dataTransfer.files);
        this._prevenirDefecto(event);

        this.mouseSobre.emit(false);
    }

    private _getDataTransfer(event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
    }

    private _extraerArchivos(listaArchivos: FileList) {
        // console.log(listaArchivos);

        // tslint:disable-next-line:forin
        for (const key in Object.getOwnPropertyNames(listaArchivos)) {
            const archivo = listaArchivos[key];

            if (this._archivoValido(archivo)) {
                const nuevoArchivo = new FileItem(archivo);
                this.archivos.push(nuevoArchivo);
            }
        }

        // console.log(this.archivos);
    }

    // Validaciones
    private _archivoValido(archivo: File) {
        if (!this._existeArchivo(archivo.name) && this._esImagen(archivo.type)) {
            return true;
        } else {
            return false;
        }
    }
    private _prevenirDefecto(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    private _existeArchivo(nombreArchivo: string) {
        for (const archivo of this.archivos) {
            if (archivo.nombreArchivo === nombreArchivo) {
                console.log(`El archivo ${nombreArchivo} ya está en la lista`);
                return true;
            }
        }

        return false;
    }

    private _esImagen(tipoArchivo: string) {
        return (tipoArchivo === '' || tipoArchivo === undefined) ? false : tipoArchivo.startsWith('image');
    }
}
