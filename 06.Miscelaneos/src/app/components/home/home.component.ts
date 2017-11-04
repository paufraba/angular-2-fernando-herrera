import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
    AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
    <app-ng-style></app-ng-style>
    <br>

    <app-css></app-css>
    <br>

    <app-classes></app-classes>
    <br>
    <br>

    <p [appResaltado]="'blue'">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <br>

    <app-ng-switch></app-ng-switch>
    `,
    styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
    AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    constructor() {
        console.log("constructor")};

    ngOnInit() {
        console.log("ngOnInit");
    }

    ngOnChanges(){
        console.log("ngOnChanges");
    }
    ngDoCheck(){
        console.log("ngDoCheck");
    }
    ngAfterContentInit(){
        console.log("ngAfterContentInit");
    }
    ngAfterContentChecked(){
        console.log("ngAfterContentChecked");
    }
    ngAfterViewInit(){
        console.log("ngAfterViewInit");
    }
    ngAfterViewChecked(){
        console.log("ngAfterViewChecked");
    }
    ngOnDestroy(){
        console.log("ngOnDestroy");
    }

}
