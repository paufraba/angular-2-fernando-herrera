import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent implements OnInit {

    videos: any[] = [];

    constructor(public _ys: YoutubeService) {
        this._ys.getVideos().subscribe(videos => {
            console.log(videos);
            this.videos = videos;
        });
    }

    ngOnInit() {
    }

}
