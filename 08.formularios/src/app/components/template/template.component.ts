import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-template',
    templateUrl: './template.component.html',
    styles: []
})
export class TemplateComponent implements OnInit {

    usuario:Object = {
        nombre: "Pau",
        apellido: "Franco",
        correo: ""
    }
    constructor() { }

    ngOnInit() {
    }

    guardar(form: NgForm) {
        console.log('ngForm: ', form);
        console.log('Valor: ', form.value);

        console.log("Usuario", this.usuario);
    }

}
