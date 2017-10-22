import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

    texto:string = "";

    constructor(private _spotifyService:SpotifyService) { }

    ngOnInit() {
        // console.log("Iniciando el servicio...");
    }

    buscarArtista(){
        this._spotifyService.getArtistas(this.texto)
        .subscribe(data => {
            console.log(data);
        });
    }
}
