import { Component, OnInit, Input } from '@angular/core';
import { IPost } from 'src/app/interfaces/ipost';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
})
export class CommentListComponent implements OnInit {
  @Input() post!: IPost;
  commentsVisible = true;

  constructor() {}

  ngOnInit() {}

  toggleComments() {
    this.commentsVisible = !this.commentsVisible;
  }
}
