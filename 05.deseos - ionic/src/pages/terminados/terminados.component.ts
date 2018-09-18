
import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';


@Component({
    selector: 'page-terminados',
    templateUrl: 'terminados.component.html'
})
export class TerminadosPage {

    constructor( public deseosService: DeseosService ) {
        
    }

}

