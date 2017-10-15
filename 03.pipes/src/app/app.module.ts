import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { CapsPipe } from '..\\app\\pipes\\caps.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
    declarations: [
        AppComponent,
        CapsPipe,
        DomseguroPipe
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'es-ARS' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
