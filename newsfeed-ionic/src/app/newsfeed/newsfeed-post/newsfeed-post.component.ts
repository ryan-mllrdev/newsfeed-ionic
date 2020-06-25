import { Component, OnInit, Input } from '@angular/core';
import { IPost } from 'src/app/interfaces/ipost';
import { Post } from 'src/app/models/post';
import { NewsfeedDataService } from 'src/app/services/newsfeed-data.service';

@Component({
  selector: 'app-newsfeed-post',
  templateUrl: './newsfeed-post.component.html',
  styleUrls: ['./newsfeed-post.component.scss'],
})
export class NewsfeedPostComponent implements OnInit {
  constructor(private newsfeedDataService: NewsfeedDataService) {}

  @Input() post: IPost;

  ngOnInit() {}

  reactToPost(event: any, postId: number) {
    this.newsfeedDataService.addReaction(postId);
  }
}
