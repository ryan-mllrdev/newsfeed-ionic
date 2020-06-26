import { Component, OnInit, Input } from '@angular/core';
import { NewsfeedDataService } from 'src/app/services/newsfeed-data.service';
import { IPost } from 'src/app/interfaces/ipost';
import { IComment } from 'src/app/interfaces/icomment';

@Component({
  selector: 'app-newsfeed-post-summary',
  templateUrl: './newsfeed-post-summary.component.html',
  styleUrls: ['./newsfeed-post-summary.component.scss'],
})
export class NewsfeedPostSummaryComponent implements OnInit {
  constructor() {}

  @Input() numberOfLikes = 0;
  @Input() numberOfHearts = 0;
  @Input() numberOfSmiles = 0;
  @Input() numberOfComments = 0;

  ngOnInit() {}
}
