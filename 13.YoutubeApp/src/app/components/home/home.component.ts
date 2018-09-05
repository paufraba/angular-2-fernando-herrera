import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent implements OnInit {

    videos: any[] = [];
    videoModal: any;

    constructor(public _ys: YoutubeService) {
        this._ys.getVideos().subscribe(videos => {
            console.log(videos);
            this.videos = videos;
        });
    }

    ngOnInit() {
    }

    verVideo(video) {
        // console.log(video);
        this.videoModal = video;
        $('#videoModal').modal();
    }

    cerrarModal() {
        this.videoModal = null;
        $('#videoModal').modal('hide');
    }

    cargarMas() {
        this._ys.getVideos().subscribe(videos => {
            this.videos.push.apply(this.videos, videos);
            console.log(videos);
        });
    }

}
