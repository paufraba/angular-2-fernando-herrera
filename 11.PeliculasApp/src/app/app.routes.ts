import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';


const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'buscar/:texto/:pagina', component: BuscarComponent },
    { path: 'buscar/:texto', component: BuscarComponent },
    { path: 'pelicula/:movie_id', component: PeliculaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class FeatureRoutingModule { }
