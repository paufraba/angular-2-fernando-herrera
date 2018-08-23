import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JsonpModule, HttpModule } from '@angular/http';

// Contenedores
import { TopComponent } from './containers/top/top.component';
import { MainComponent } from './containers/main/main.component';

// Rutas
import { FeatureRoutingModule } from './app.routes';

// Componentes
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';

// Servicios
import { PeliculasService } from './services/peliculas.service';
import { PeliculaComponent } from './components/pelicula/pelicula.component';



@NgModule({
    declarations: [
        AppComponent,
        TopComponent,
        MainComponent,
        HomeComponent,
        BuscarComponent,
        PeliculaComponent
    ],
    imports: [
        BrowserModule,
        FeatureRoutingModule,
        HttpModule,
        JsonpModule
    ],
    providers: [
        PeliculasService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
