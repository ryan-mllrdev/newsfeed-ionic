import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/ipost';
import { IReaction } from '../interfaces/ireaction';
import { ReactionType } from '../enums/reaction-type';
import { IComment } from '../interfaces/icomment';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'platform',
})
export class NewsfeedDataService {
  newsfeed: IPost[] = [];
  private defaultUser: IUser = { id: 1, name: 'Ryan Repe' };

  constructor() {
    this.loadNewsfeed();
  }

  findPost(id: number): IPost {
    const index: number = this.newsfeed.findIndex((post) => post.id === id);
    return this.newsfeed[index];
  }

  createPost(post: IPost) {
    post.id = this.createId();
    post.date = new Date();
    post.comments = [];
    post.reactions = [];
    post.postedBy = this.defaultUser;
    this.newsfeed.push(post);
  }

  updatePost(toBeUpdatedPost: IPost) {
    const index: number = this.newsfeed.findIndex((post) => post.id === toBeUpdatedPost.id);

    if (index) {
      const post: IPost = {
        ...toBeUpdatedPost,
      };

      this.newsfeed[index] = post;
    }
  }

  deletePost(postId: number) {
    const post: IPost = this.findPost(postId);
    const index = this.newsfeed.indexOf(post);
    this.newsfeed.splice(index, 1);
  }

  addReaction(postId: number, typeOfReaction: ReactionType) {
    const post: IPost = this.findPost(postId);
    const reactions: IReaction[] = post.reactions;
    const reactionIndex: number = reactions.findIndex(
      (reactionValue) => reactionValue.reactedBy.id === this.defaultUser.id && reactionValue.reactionType === typeOfReaction,
    );

    const foundReaction: IReaction = post.reactions[reactionIndex];
    if (foundReaction) {
      this.deleteReaction(postId, foundReaction.id);
    } else {
      const reaction: IReaction = {
        id: this.createReactionId(postId),
        reactionType: typeOfReaction,
        date: new Date(Date.now()),
        reactedBy: this.defaultUser,
      };
      post.reactions.push(reaction);
    }
  }

  deleteReaction(postId: number, reactionId: number) {
    const post: IPost = this.findPost(postId);
    const index = this.findReactionIndex(postId, reactionId);
    post.reactions.splice(index, 1);
  }

  addComment(postId: number, commentText: string) {
    const post: IPost = this.findPost(postId);
    const comment: IComment = {
      id: this.createCommentId(postId),
      message: commentText,
      postedBy: this.defaultUser,
      date: new Date(Date.now()),
    };
    post.comments.push(comment);
  }

  deleteComment(postId: number, commentId: number) {
    const post: IPost = this.findPost(postId);
    const index = this.findCommentIndex(postId, commentId);
    post.comments.splice(index, 1);
  }

  getAllComments(postId: number): IComment[] {
    const post: IPost = this.findPost(postId);
    return post.comments;
  }

  getAllReactions(postId: number): IReaction[] {
    const post: IPost = this.findPost(postId);
    return post.reactions;
  }

  createId(): number {
    const ids: number[] = this.newsfeed.map((post) => {
      return post.id;
    });

    if (!ids.length) {
      return 1;
    }

    return Math.max(...ids) + 1;
  }

  getNumberOfLikes(reactions: IReaction[]): number {
    return this.getNumberOfReactionType(reactions, ReactionType.LIKE);
  }

  getNumberOfHearts(reactions: IReaction[]): number {
    return this.getNumberOfReactionType(reactions, ReactionType.HEART);
  }

  getNumberOfSmiles(reactions: IReaction[]): number {
    return this.getNumberOfReactionType(reactions, ReactionType.SMILE);
  }

  getNumberOfComments(postId: number): number {
    if (!postId) {
      return 0;
    }
    const post: IPost = this.findPost(postId);
    return post.comments.length;
  }

  private getNumberOfReactionType(reactions: IReaction[], reactionType: ReactionType): number {
    return reactions.filter((a) => a.reactionType === reactionType).length;
  }

  private findCommentIndex(postId: number, commentId: number): number {
    const post: IPost = this.findPost(postId);
    const index: number = post.comments.findIndex((comment) => comment.id === commentId);
    return index;
  }

  private findReactionIndex(postId: number, reactionId: number): number {
    const post: IPost = this.findPost(postId);
    const index: number = post.reactions.findIndex((reaction) => reaction.id === reactionId);
    return index;
  }

  private createCommentId(postId: number) {
    const comments: IComment[] = this.getAllComments(postId);
    const ids: number[] = comments.map((comment) => {
      return comment.id;
    });

    if (!ids.length) {
      return 1;
    }

    return Math.max(...ids) + 1;
  }

  private createReactionId(postId: number) {
    const reactions: IReaction[] = this.getAllReactions(postId);
    const ids: number[] = reactions.map((reaction) => {
      return reaction.id;
    });

    if (!ids.length) {
      return 1;
    }

    return Math.max(...ids) + 1;
  }

  private loadNewsfeed() {
    const user = { id: 1, name: 'Ryan Repe' };

    this.newsfeed = [
      {
        id: 1,
        postedBy: user,
        message: 'This is my first post.',
        date: new Date(2020, 6, 24),
        comments: [],
        reactions: [],
      },
      {
        id: 2,
        postedBy: user,
        message: 'This is my second post.',
        date: new Date(2020, 6, 24),
        comments: [],
        reactions: [],
      },
      {
        id: 3,
        postedBy: user,
        message: 'This is my third post.',
        date: new Date(2020, 6, 24),
        comments: [],
        reactions: [],
      },
    ];
  }
}
