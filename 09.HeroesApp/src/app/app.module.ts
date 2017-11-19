import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { APP_ROUTING } from './app.routes';

//Servicios
import { HeroesService } from './services/heroes.service';

//Pipes
import { KeysPipe } from './pipes/keys.pipe';

//Components
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroeComponent,
        KeysPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        APP_ROUTING
    ],
    providers: [
        HeroesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
