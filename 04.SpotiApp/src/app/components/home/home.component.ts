import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    novedades: any[] = [];
    loading: boolean;
    error: boolean;
    mensajeError: string;

    constructor(private spotifyService: SpotifyService) {
        this.loading = true;
        this.error = false;

        this.spotifyService.getNovedades()
            .subscribe(
                (data: any) => {
                    this.novedades = data;
                    console.log(this.novedades);

                    this.loading = false;
                },
                err => {
                    this.error = true;
                    this.loading = false;

                    this.mensajeError = err.error.error.message;

                    console.log(err);
                }
            );
    }

    ngOnInit() {
    }

}
