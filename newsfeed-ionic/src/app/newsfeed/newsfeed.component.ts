import { Component, OnInit } from '@angular/core';
import { NewsfeedDataService } from '../services/newsfeed-data.service';
import { IPost } from '../interfaces/ipost';
import { Post } from '../models/post';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
})
export class NewsfeedComponent implements OnInit {
  newsfeed: IPost[] = [];

  constructor(private newsfeedDataService: NewsfeedDataService) {
    this.loadNewsfeed();
  }

  ngOnInit() {}

  private loadNewsfeed() {
    this.newsfeed = this.newsfeedDataService.newsfeed;
  }
}
