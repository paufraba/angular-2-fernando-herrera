import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { LineasComponent } from './components/lineas/lineas.component';
import { BarrasComponent } from './components/barras/barras.component';
import { DonutsComponent } from './components/donuts/donuts.component';
import { RadarComponent } from './components/radar/radar.component';

@NgModule({
    declarations: [
        AppComponent,
        LineasComponent,
        BarrasComponent,
        DonutsComponent,
        RadarComponent
    ],
    imports: [
        BrowserModule,
        ChartsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
