import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

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

    nuevo:boolean = false;
    id:string;

    constructor(private _heroesService:HeroesService,
        private router:Router,
        private ruta:ActivatedRoute) {
        this.ruta.params.subscribe( params => {
            this.id = params['id'];

            if (this.id !== "nuevo") {
                this._heroesService.getHeroe(this.id).subscribe(
                    heroe => this.heroe = heroe
                )
            }
        });
    }

    ngOnInit() {
    }

    guardar() {
        console.log(this.heroe);

        if (this.id == "nuevo") {
            this._heroesService.nuevoHeroe(this.heroe)
            .subscribe(data=>{
                this.router.navigate(['/heroe', data.name]);
                // this.heroe.key$ = data.name;
            },
            error => console.log(error));
        } else {
            this._heroesService.actualizarHeroe(this.heroe, this.id)
            .subscribe(data=>{
                console.log(data)
            },
            error => console.log(error));
        }

    }

    nuevoHeroe(form:NgForm) {
        this.router.navigate(['/heroe', 'nuevo']);
        form.reset({
            casa: "Marvel"
        });

    }

}
