import { Component, OnInit, Input } from '@angular/core';
import { IPost } from 'src/app/interfaces/ipost';
import { NewsfeedDataService } from 'src/app/services/newsfeed-data.service';
import { AlertController } from '@ionic/angular';
import { NewsfeedFormComponent } from '../newsfeed-form/newsfeed-form.component';
import { IComment } from 'src/app/interfaces/icomment';

@Component({
  selector: 'app-newsfeed-post',
  templateUrl: './newsfeed-post.component.html',
  styleUrls: ['./newsfeed-post.component.scss'],
})
export class NewsfeedPostComponent implements OnInit {
  constructor(private newsfeedDataService: NewsfeedDataService) {
    this.post = newsfeedDataService.findPost(this.postId);
  }

  @Input() postId = 0;
  post: IPost;
  likes = 0;
  hearts = 0;
  smiles = 0;
  comments: IComment[] = [];
  showMoreComments = false;
  allCommentsExpanded = false;

  ngOnInit() {
    this.post = this.newsfeedDataService.findPost(this.postId);
  }

  getLikes(likes: number) {
    this.likes = likes;
  }

  getHearts(hearts: number) {
    this.hearts = hearts;
  }

  getSmiles(smiles: number) {
    this.smiles = smiles;
  }

  handleEmittedComments(comments: IComment[]) {
    this.comments = comments;
  }

  handleAllCommentsExpanded(allCommentsExpanded: boolean) {
    this.allCommentsExpanded = allCommentsExpanded;
  }
}
