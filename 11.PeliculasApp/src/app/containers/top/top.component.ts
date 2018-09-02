import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-top',
    templateUrl: './top.component.html'
})
export class TopComponent {

    constructor(private router: Router) { }

    buscarPelicula(texto: string) {
        if (texto.length == 0) {
            return;
        }
        this.router.navigate(['/buscar', texto]);
    }

}
