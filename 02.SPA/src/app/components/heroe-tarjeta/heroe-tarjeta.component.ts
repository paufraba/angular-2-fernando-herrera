import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-heroe-tarjeta',
    templateUrl: './heroe-tarjeta.component.html',
    styles: []
})
export class HeroeTarjetaComponent implements OnInit {

    @Input() heroe: any = {};
    @Output() onHeroeSeleccionado: EventEmitter<any>;

    constructor(private router: Router) {
        this.onHeroeSeleccionado = new EventEmitter();
    }

    ngOnInit() {
    }

    verHeroe() {
        // Redirección directa
        this.router.navigate(['/heroe', this.heroe.id]);

        // Devuelve un evento para ser gestionado por el componente lllamante
        // this.onHeroeSeleccionado.emit(this.heroe.id);
    }

}
