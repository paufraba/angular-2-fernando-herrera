import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  // styles: [`
  //     .ng-invalid.ng-touched:not(form) {
  //         border: 1px solid red;
  //     }
  // `
  // ]
})
export class TemplateComponent implements OnInit {

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "Hombre",
    acepta: null
  }

  paises = [{
    codigo: "ES",
    nombre: "España"
  },
  {
    codigo: "CAT",
    nombre: "Catalunya"
  }]

  sexos:string[] = ["Hombre", "Mujer", "Indefinido"]

  constructor() { }

  ngOnInit() {
  }

  guardar(form: NgForm) {
    console.log('ngForm: ', form);
    console.log('Valor: ', form.value);

    console.log("Usuario", this.usuario);
  }

}
