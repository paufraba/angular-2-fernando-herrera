import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

    texto = '';
    loading: boolean;

    constructor(private _spotifyService: SpotifyService) {
        this.loading = false;
    }

    ngOnInit() {
        // console.log("Iniciando el servicio...");
    }

    buscarArtista() {
        this.loading = true;

        this._spotifyService.getArtistas(this.texto)
            .subscribe(data => {
                console.log(data);

                this.loading = false;
            },
                err => {
                    console.error('Se ha producido un error', err);
                })
            ;
    }
}
