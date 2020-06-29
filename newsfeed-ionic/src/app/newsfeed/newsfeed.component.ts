import { Component, OnInit } from '@angular/core';
import { NewsfeedDataService } from '../services/newsfeed-data.service';
import { IPost } from '../interfaces/ipost';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
})
export class NewsfeedComponent implements OnInit {
  numberOfLikes = 0;
  numberOfHearts = 0;
  numberOfSmiles = 0;
  searchPost = '';
  newsfeed: IPost[] = [];

  constructor(private newsfeedDataService: NewsfeedDataService) {
    this.loadNewsfeed();
  }

  ngOnInit() {}

  private loadNewsfeed() {
    this.newsfeed = this.newsfeedDataService.newsfeed;
  }

  handlePostedToNewsfeed(postId: number) {
    this.numberOfLikes = this.newsfeedDataService.getNumberOfLikes(postId);
    this.numberOfHearts = this.newsfeedDataService.getNumberOfHearts(postId);
    this.numberOfSmiles = this.newsfeedDataService.getNumberOfSmiles(postId);
  }
}
