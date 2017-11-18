import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styles: []
})
export class HeroeComponent implements OnInit {

    heroe:Heroe = {
        nombre: "",
        casa: "Marvel",
        bio: ""
    };

    constructor(private _heroesService:HeroesService,
        private router:Router) { }

    ngOnInit() {
    }

    guardar() {
        console.log(this.heroe);

        this._heroesService.nuevoHeroe(this.heroe)
            .subscribe(data=>{
                this.router.navigate(['/heroe', data.name])
            },
            error => console.log(error));
    }

}
