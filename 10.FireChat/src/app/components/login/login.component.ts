import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: []
})
export class LoginComponent implements OnInit {

    constructor(public _cs: ChatService) { }

    ngOnInit() {
    }

    login(proveedor:string) {
        console.log(proveedor);
        this._cs.login(proveedor);
    }

}
