import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReactionTypes } from 'src/app/interfaces/reactionTypes';
import { NewsfeedDataService } from 'src/app/services/newsfeed-data.service';
import { IComment } from 'src/app/interfaces/icomment';

@Component({
  selector: 'app-post-reaction',
  templateUrl: './post-reaction.component.html',
  styleUrls: ['./post-reaction.component.scss'],
})
export class PostReactionComponent implements OnInit {
  constructor(private newsfeedDataService: NewsfeedDataService) {}

  @Input() postId = 0;
  comments: IComment[] = [];
  numberOfLikes = 0;
  numberOfHearts = 0;
  numberOfSmiles = 0;

  ngOnInit() {}

  reactToPost(clickEvent: any, reactionType: number) {
    switch (reactionType) {
      case ReactionTypes.Like:
        this.newsfeedDataService.addReaction(this.postId, this.newsfeedDataService.defaultUser.id, ReactionTypes.Like);
        this.numberOfLikes = this.newsfeedDataService.getNumberOfLikes(this.postId);
        break;
      case ReactionTypes.Heart:
        this.newsfeedDataService.addReaction(this.postId, this.newsfeedDataService.defaultUser.id, ReactionTypes.Heart);
        this.numberOfHearts = this.newsfeedDataService.getNumberOfHearts(this.postId);
        break;
      case ReactionTypes.Smile:
        this.newsfeedDataService.addReaction(this.postId, this.newsfeedDataService.defaultUser.id, ReactionTypes.Smile);
        this.numberOfSmiles = this.newsfeedDataService.getNumberOfSmiles(this.postId);
        break;
    }
  }
}
