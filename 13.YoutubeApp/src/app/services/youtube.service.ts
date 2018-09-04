import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable';


@Injectable()
export class YoutubeService {

    private youtubeURL = 'https://www.googleapis.com/youtube/v3';
    private apiKey = 'AIzaSyCmCVvIsfbv7DX7_4C1jDFONDcHBXDEphw';
    private nextPageToken: string;

    constructor(public http: Http) {

    }

    getVideos() {
        const url = `${this.youtubeURL}/playlists`;
        let params = new URLSearchParams;

        params.set('part', 'snippet');
        params.set('channelId', 'UC_x5XG1OV2P6uZZ5FSM9Ttw');
        params.set('maxResults', '10');
        params.set('key', this.apiKey);

        return this.http.get(url, { search: params })
            .map(res => {
                console.log(res.json());
                this.nextPageToken = res.json().nextPageToken;

                const videos: any[] = [];

                for (const item of res.json().items) {
                    videos.push(item.snippet);
                }

                return videos;
            });
    }

}
