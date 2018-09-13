import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-heroe-tarjeta',
    templateUrl: './heroe-tarjeta.component.html',
    styles: []
})
export class HeroeTarjetaComponent implements OnInit {

    @Input() heroe: any = {};

    constructor(private router: Router) { }

    ngOnInit() {
    }

    verHeroe() {
        this.router.navigate(['/heroe', this.heroe.id]);
    }

}
