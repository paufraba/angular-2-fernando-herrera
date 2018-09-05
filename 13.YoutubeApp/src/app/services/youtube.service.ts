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
        const url = `${this.youtubeURL}/playlistItems`;
        const params = new URLSearchParams;

        params.set('part', 'snippet');
        params.set('playlistId', 'PL0cWlOyqP6_N0dRloyZxWTTj0qpdi0cg4');
        params.set('maxResults', '10');
        params.set('key', this.apiKey);

        if (this.nextPageToken) {
            params.set('pageToken', this.nextPageToken);
        }

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
