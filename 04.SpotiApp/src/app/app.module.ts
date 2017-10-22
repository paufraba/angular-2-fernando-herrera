import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { APP_ROUTING } from './app.routes';

//servicios
import { SpotifyService } from './services/spotify.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ArtistaComponent } from './components/artista/artista.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent,
        NavbarComponent,
        SinfotoPipe,
        ArtistaComponent,
        DomseguroPipe
    ],
    imports: [
        BrowserModule,
        APP_ROUTING,
        HttpModule,
        FormsModule
    ],
    providers: [
        SpotifyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
