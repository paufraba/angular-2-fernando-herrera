import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tarjetas',
    templateUrl: './tarjetas.component.html',
    styles: []
})
export class TarjetasComponent {

    @Input() items: any[] = [];

    constructor(private router: Router) { }

    verArtista(item: any) {
        console.log(item);

        let artistaId;

        if (item.tpye === 'artist') {
            artistaId = item.id;
        } else {
            artistaId = item.artists[0].id;
        }

        this.router.navigate(['/artista', artistaId]);

    }

}
