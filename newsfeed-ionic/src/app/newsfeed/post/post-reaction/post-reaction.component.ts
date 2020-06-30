import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReactionType } from 'src/app/enums/reaction-type';
import { NewsfeedDataService } from 'src/app/services/newsfeed-data.service';
import { IComment } from 'src/app/interfaces/icomment';
import { IPost } from 'src/app/interfaces/ipost';
import { IReaction } from 'src/app/interfaces/ireaction';

@Component({
  selector: 'app-post-reaction',
  templateUrl: './post-reaction.component.html',
  styleUrls: ['./post-reaction.component.scss'],
})
export class PostReactionComponent implements OnInit {
  @Input() post!: IPost;
  @Input() numberOfLikes = 0;
  @Input() numberOfHearts = 0;
  @Input() numberOfSmiles = 0;

  constructor(private newsfeedDataService: NewsfeedDataService) {}

  ngOnInit() {}

  reactToPost(clickEvent: any, reactionType: ReactionType) {
    this.newsfeedDataService.addReaction(this.post.id, reactionType);

    const reactions: IReaction[] = this.post.reactions;

    this.numberOfLikes = this.newsfeedDataService.getNumberOfLikes(reactions);
    this.numberOfHearts = this.newsfeedDataService.getNumberOfHearts(reactions);
    this.numberOfSmiles = this.newsfeedDataService.getNumberOfSmiles(reactions);
  }

  get LIKE(): ReactionType {
    return ReactionType.LIKE;
  }

  get HEART(): ReactionType {
    return ReactionType.HEART;
  }

  get SMILE(): ReactionType {
    return ReactionType.SMILE;
  }
}
