import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReactionTypes } from 'src/app/interfaces/reactionTypes';
import { NewsfeedDataService } from 'src/app/services/newsfeed-data.service';
import { IComment } from 'src/app/interfaces/icomment';
import { IPost } from 'src/app/interfaces/ipost';

@Component({
  selector: 'app-newsfeed-post-reaction',
  templateUrl: './newsfeed-post-reaction.component.html',
  styleUrls: ['./newsfeed-post-reaction.component.scss'],
})
export class NewsfeedPostReactionComponent implements OnInit {
  constructor(private newsfeedDataService: NewsfeedDataService) {}

  @Input() postId = 0;
  comments: IComment[] = [];

  @Output() emitLikes: EventEmitter<number> = new EventEmitter();
  @Output() emitHearts: EventEmitter<number> = new EventEmitter();
  @Output() emitSmiles: EventEmitter<number> = new EventEmitter();

  ngOnInit() {}

  reactToPost(clickEvent: any, reactionType: number) {
    let numberOfLikes = 0;
    let numberOfHearts = 0;
    let numberOfSmiles = 0;

    switch (reactionType) {
      case ReactionTypes.Like:
        this.newsfeedDataService.addReaction(this.postId, ReactionTypes.Like);
        numberOfLikes = this.newsfeedDataService.getNumberOfLikes(this.postId);
        this.emitLikes.emit(numberOfLikes);
        break;
      case ReactionTypes.Heart:
        this.newsfeedDataService.addReaction(this.postId, ReactionTypes.Heart);
        numberOfHearts = this.newsfeedDataService.getNumberOfHearts(this.postId);
        this.emitHearts.emit(numberOfHearts);
        break;
      case ReactionTypes.Smile:
        this.newsfeedDataService.addReaction(this.postId, ReactionTypes.Smile);
        numberOfSmiles = this.newsfeedDataService.getNumberOfSmiles(this.postId);
        this.emitSmiles.emit(numberOfSmiles);
        break;
    }
  }

  expandComments(clickEvent: any, id: number) {
    const post: IPost = this.newsfeedDataService.findPost(this.postId);
    this.comments = post.comments;
  }
}
