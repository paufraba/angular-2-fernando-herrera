import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-editar-mapa',
    templateUrl: './editar-mapa.component.html',
    styles: []
})
export class EditarMapaComponent implements OnInit {

    formulario: FormGroup;

    constructor(
        public fb: FormBuilder,
        public dialogRef: MatDialogRef<EditarMapaComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {

        console.log(data);
        this.formulario = fb.group({
            'titulo': data.titulo,
            'descripcion': data.descripcion
        });

    }

    ngOnInit() {
    }

    guardarMarcador() {
        this.dialogRef.close(this.formulario.value);
    }

    cancelar(): void {
        this.dialogRef.close();
    }
}
