import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { YoutubeService } from './services/youtube.service';
import { HttpModule } from '@angular/http';
import { VideoYoutubePipe } from './pipes/video-youtube.pipe';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        VideoYoutubePipe
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [
        YoutubeService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
