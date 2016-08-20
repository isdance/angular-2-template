import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/tmpl/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
    title = Config.MAIN_TITLE;
    videos:Array<Video>;

    constructor(){
        this.videos = [
            new Video(1, "Tutorial 1 - Getting Started", "hXfigUyeHaY"),
            new Video(2, "Tutorial 2 - Overview and Core Concepts", "vc9n0j6-D2U")
        ];
    }
}
