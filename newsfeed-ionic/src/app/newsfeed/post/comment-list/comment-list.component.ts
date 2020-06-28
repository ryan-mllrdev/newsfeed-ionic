import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IComment } from 'src/app/interfaces/icomment';
import { NewsfeedDataService } from 'src/app/services/newsfeed-data.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
})
export class CommentListComponent implements OnInit {
  constructor(private newsfeedDataService: NewsfeedDataService) {}

  @Input() comments: IComment[] = [];
  @Input() postId = 0;

  ngOnInit() {}
}
