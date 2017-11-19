import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styles: []
})
export class HeroesComponent implements OnInit {

    heroes:Heroe[];
    loading:boolean = true;

    constructor(private _heroesService:HeroesService) {
        this._heroesService.getHeroes().subscribe( data => {
            console.log(data);

            this.heroes = data;
            this.loading = false;
        });
    }

    ngOnInit() {
    }

    borrarHeroe(key$:string) {
        this._heroesService.borrarHeroe(key$).subscribe( data => {
            if (data) {
                console.error(data);
            } else {
                delete this.heroes[key$];
            }
        });
    }

}
