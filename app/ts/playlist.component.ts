import {Component} from 'angular2/core';
import {Video} from "./video";
import {Config} from "./config.service";


@Component({
    "selector":"playlist",
    templateUrl:"app/tmpl/playlist.component.html",
    inputs:['videos']
})

export class PlaylistComponent{

    videoBaseUrl = Config.VIDEO_BASE_URL;
    videoLinkToPlay = "";

    loadVideo(video:Video) {
        this.videoLinkToPlay = this.videoBaseUrl + video.key;
    }
}