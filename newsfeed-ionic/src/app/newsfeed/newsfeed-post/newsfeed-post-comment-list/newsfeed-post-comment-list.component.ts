import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IComment } from 'src/app/interfaces/icomment';
import { NewsfeedDataService } from 'src/app/services/newsfeed-data.service';
import { IPost } from 'src/app/interfaces/ipost';

@Component({
  selector: 'app-newsfeed-post-comment-list',
  templateUrl: './newsfeed-post-comment-list.component.html',
  styleUrls: ['./newsfeed-post-comment-list.component.scss'],
})
export class NewsfeedPostCommentListComponent implements OnInit {
  constructor(private newsfeedDataService: NewsfeedDataService) {}

  @Input() comments: IComment[] = [];
  @Input() postId = 0;

  ngOnInit() {}
}
