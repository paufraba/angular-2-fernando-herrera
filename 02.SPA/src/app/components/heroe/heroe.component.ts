import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '..\\..\\services\\heroes.service';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

    heroe:any = {};

    constructor(private activatedRoute: ActivatedRoute,
        private _heroesService:HeroesService) {
            this.activatedRoute.params.subscribe(params=>{
                this.heroe = this._heroesService.getHeroe(params['id']);
                console.log(this.heroe);
            })
        }

        ngOnInit() {
        }

    }
