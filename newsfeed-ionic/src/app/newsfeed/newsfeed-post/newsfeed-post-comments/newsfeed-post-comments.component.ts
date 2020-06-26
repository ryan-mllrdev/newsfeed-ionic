import { Component, OnInit, Input } from '@angular/core';
import { IComment } from 'src/app/interfaces/icomment';

@Component({
  selector: 'app-newsfeed-post-comments',
  templateUrl: './newsfeed-post-comments.component.html',
  styleUrls: ['./newsfeed-post-comments.component.scss'],
})
export class NewsfeedPostCommentsComponent implements OnInit {
  constructor() {}

  @Input() comments: IComment[] = [];

  ngOnInit() {}
}
