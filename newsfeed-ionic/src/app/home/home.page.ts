import { Component, OnInit } from '@angular/core';
import { IPost } from '../interfaces/ipost';
import { NewsfeedDataService } from '../services/newsfeed-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  newsfeed: IPost[] = [];
  constructor(private newsfeedDataService: NewsfeedDataService) {}
  ngOnInit(): void {
    this.loadNewsfeed();
  }

  private loadNewsfeed() {
    this.newsfeed = this.newsfeedDataService.newsfeed;
  }
}
