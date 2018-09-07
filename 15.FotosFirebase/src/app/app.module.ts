import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';
import { APP_ROUTING } from './app.routes';
import { CargaImagenesService } from './services/carga-imagenes.service';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';

@NgModule({
    declarations: [
        AppComponent,
        FotosComponent,
        CargaComponent,
        NgDropFilesDirective
    ],
    imports: [
        BrowserModule,
        APP_ROUTING,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireStorageModule // imports firebase/storage only needed for storage features
    ],
    providers: [
        CargaImagenesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
