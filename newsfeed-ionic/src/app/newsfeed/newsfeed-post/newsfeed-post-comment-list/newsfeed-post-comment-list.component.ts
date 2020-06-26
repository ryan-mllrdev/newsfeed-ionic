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
  // @Output() emitExpandedComments: EventEmitter<IComment[]> = new EventEmitter();

  pageSize = 0;

  ngOnInit() {}

  expandComments() {
    this.pageSize++;

    const post: IPost = this.newsfeedDataService.findPost(this.postId);

    if (this.pageSize >= post.comments.length) {
      this.pageSize = post.comments.length;
    }

    this.comments = this.newsfeedDataService.getComments(this.postId, this.pageSize);
    // this.emitExpandedComments.emit(this.comments);
  }

  collapseComments() {
    this.pageSize = 0;

    const comments: IComment[] = this.newsfeedDataService.getComments(this.postId, this.pageSize);
    // this.emitExpandedComments.emit(comments);
  }
}
