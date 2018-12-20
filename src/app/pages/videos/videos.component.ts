import { Component, OnInit } from '@angular/core';
import { VideosService } from './videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos : any;

  constructor(public videosServices : VideosService) { }

  ngOnInit() {
    this.getVideosService();
  }
  getVideosService() {
    this.videosServices.getListVideosService()
    .then(data => {
      this.videos = data;
      console.log(this.videos);
    });
  }
}
