import { Component, OnInit } from '@angular/core';
import { NewsfeedDataService } from '../services/newsfeed-data.service';
import { IPost } from '../interfaces/ipost';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
})
export class NewsfeedComponent implements OnInit {
  searchPost = '';
  newsfeed: IPost[] = [];

  constructor(private newsfeedDataService: NewsfeedDataService) {
    this.loadNewsfeed();
  }

  ngOnInit() {}

  private loadNewsfeed() {
    this.newsfeed = this.newsfeedDataService.newsfeed;
  }
}
