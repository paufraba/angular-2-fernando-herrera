import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <app-classes></app-classes>

    <p [appResaltado]="'blue'">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>

    <app-ng-switch></app-ng-switch>
    `,
    styles: []
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
