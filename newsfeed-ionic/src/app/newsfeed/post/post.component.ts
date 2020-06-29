import { Component, OnInit, Input } from '@angular/core';
import { IPost } from 'src/app/interfaces/ipost';
import { NewsfeedDataService } from 'src/app/services/newsfeed-data.service';
import { IComment } from 'src/app/interfaces/icomment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  constructor(private newsfeedDataService: NewsfeedDataService) {
    this.post = newsfeedDataService.findPost(this.postId);
  }

  @Input() postId = 0;
  post: IPost;
  numberOfLikes = 0;
  numberOfHearts = 0;
  numberOfSmiles = 0;
  comments: IComment[] = [];

  ngOnInit() {
    this.post = this.newsfeedDataService.findPost(this.postId);
  }

  handleEmittedComments(comments: IComment[]) {
    this.comments = comments;
  }
}
