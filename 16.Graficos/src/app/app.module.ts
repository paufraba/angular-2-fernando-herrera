import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { LineasComponent } from './components/lineas/lineas.component';

@NgModule({
    declarations: [
        AppComponent,
        LineasComponent
    ],
    imports: [
        BrowserModule,
        ChartsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
