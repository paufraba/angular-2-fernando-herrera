import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

    texto = '';

    constructor(private _spotifyService: SpotifyService) { }

    ngOnInit() {
        // console.log("Iniciando el servicio...");
    }

    buscarArtista() {
        this._spotifyService.getArtistas(this.texto)
            .subscribe(data => {
                console.log(data);
            },
                err => {
                    console.error('Se ha producido un error', err);
                })
            ;
    }
}
