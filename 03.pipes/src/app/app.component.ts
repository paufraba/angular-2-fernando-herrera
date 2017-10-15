import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    nombre = "Pau";
    nombreCompleto = "Pau FRANco baDENEs";
    array = [1,2,3,4,5,6,7,8,9,10];
    pi = Math.PI;
    a = 0.234;
    salario = 6543.21;
    heroe = {
        nombre: "Logan",
        clave: "Lobezno",
        edad: 500,
        direccion: {
            calle: "Su calle",
            numero: 10
        }
    }

    valor = new Promise((resolve, reject)=>{
        setTimeout(()=>resolve("Ya tenemos los datos"), 3500)
    })

    fecha = new Date();

    video = "kJQP7kiw5Fk";
    activar:boolean = true;
}
