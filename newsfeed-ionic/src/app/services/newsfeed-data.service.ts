import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/ipost';
import { Observable, of, ObjectUnsubscribedError } from 'rxjs';
import { map } from 'rxjs/operators';
import { IReaction } from '../interfaces/ireaction';
import { ReactionTypes } from '../interfaces/reactionTypes';
import { IComment } from '../interfaces/icomment';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'platform',
})
export class NewsfeedDataService {
  baseUrl = 'assets';
  newsfeed: IPost[] = [];
  defaultUser: IUser = { id: 1, name: 'Ryan Repe' };

  constructor() {
    this.loadNewsfeed();
  }

  savePost(post: IPost) {
    post.id = this.createId();
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

  findPost(id: number): IPost {
    const index: number = this.newsfeed.findIndex((post) => post.id === id);
    return this.newsfeed[index];
  }

  addReaction(postId: number, userId: number, typeOfReaction: ReactionTypes = ReactionTypes.Like) {
    const post: IPost = this.findPost(postId);
    const reactions: IReaction[] = post.reactions;
    const reactionIndex: number = reactions.findIndex(
      (reactionValue) => reactionValue.reactedBy.id === userId && reactionValue.reactionType === typeOfReaction,
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

  writeComment(postId: number, commentText: string) {
    const post: IPost = this.findPost(postId);
    const comment: IComment = {
      id: this.createCommentId(postId),
      message: commentText,
      postedBy: this.defaultUser,
      date: new Date(Date.now()),
    };
    post.comments.push(comment);
  }

  updateComment(postId: number, commentToUpdate: IComment) {
    const post: IPost = this.findPost(postId);
    const index: number = this.findCommentIndex(postId, commentToUpdate.id);

    if (index) {
      const comment: IComment = {
        ...commentToUpdate,
      };

      post.comments[index] = comment;
    }
  }

  deleteComment(postId: number, commentId: number) {
    const post: IPost = this.findPost(postId);
    const index = this.findCommentIndex(postId, commentId);
    post.comments.splice(index, 1);
  }

  findComment(postId: number, commentId: number): IComment {
    const post: IPost = this.findPost(postId);
    const index: number = post.comments.findIndex((comment) => comment.id === commentId);
    return post.comments[index];
  }

  findCommentIndex(postId: number, commentId: number): number {
    const post: IPost = this.findPost(postId);
    const index: number = post.comments.findIndex((comment) => comment.id === commentId);
    return index;
  }

  findReaction(postId: number, reactionId: number): IReaction {
    const post: IPost = this.findPost(postId);
    const index: number = post.reactions.findIndex((reaction) => reaction.id === reactionId);
    return post.reactions[index];
  }

  findReactionIndex(postId: number, reactionId: number): number {
    const post: IPost = this.findPost(postId);
    const index: number = post.reactions.findIndex((reaction) => reaction.id === reactionId);
    return index;
  }

  createCommentId(postId: number) {
    const comments: IComment[] = this.getAllComments(postId);
    const ids: number[] = comments.map((comment) => {
      return comment.id;
    });

    if (!ids.length) {
      return 1;
    }

    return Math.max(...ids) + 1;
  }

  createReactionId(postId: number) {
    const reactions: IReaction[] = this.getAllReactions(postId);
    const ids: number[] = reactions.map((reaction) => {
      return reaction.id;
    });

    if (!ids.length) {
      return 1;
    }

    return Math.max(...ids) + 1;
  }

  getAllComments(postId: number): IComment[] {
    const post: IPost = this.findPost(postId);
    return post.comments;
  }

  getAllReactions(postId: number): IReaction[] {
    const post: IPost = this.findPost(postId);
    return post.reactions;
  }

  getComments(postId: number, pageSize: number = 1, pageNumber: number = 1): IComment[] {
    const post: IPost = this.findPost(postId);
    return this.paginateComments(post.comments, pageSize, pageNumber);
  }

  getLatestComments(postId: number, requestedSize: number): IComment[] {
    const post: IPost = this.findPost(postId);
    const commentsLength = post.comments.length;

    if (requestedSize > commentsLength) {
      return post.comments;
    } else {
      const from = commentsLength - requestedSize;
      const to = commentsLength;

      const comments: IComment[] = post.comments.slice(from, to);
      return comments;
    }
  }

  private paginateComments(comments: IComment[], pageSize: number, pageNumber: number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return comments.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
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

  getNumberOfLikes(postId: number): number {
    if (!postId) {
      return 0;
    }
    const post: IPost = this.findPost(postId);
    return post.reactions.filter((a) => a.reactionType === ReactionTypes.Like).length;
  }

  getNumberOfHearts(postId: number): number {
    if (!postId) {
      return 0;
    }
    const post: IPost = this.findPost(postId);
    return post.reactions.filter((a) => a.reactionType === ReactionTypes.Heart).length;
  }

  getNumberOfSmiles(postId: number): number {
    if (!postId) {
      return 0;
    }
    const post: IPost = this.findPost(postId);
    return post.reactions.filter((a) => a.reactionType === ReactionTypes.Smile).length;
  }

  getNumberOfComments(postId: number): number {
    if (!postId) {
      return 0;
    }
    const post: IPost = this.findPost(postId);
    return post.comments.length;
  }

  private loadNewsfeed() {
    const user = { id: 1, name: 'Ryan Repe' };

    this.newsfeed = [
      {
        id: 1,
        postedBy: user,
        title: 'My First Post',
        message: 'This is my first post.',
        date: new Date(2020, 6, 24),
        comments: [],
        reactions: [],
      },
      {
        id: 2,
        postedBy: user,
        title: 'My Second Post',
        message: 'This is my second post.',
        date: new Date(2020, 6, 24),
        comments: [],
        reactions: [],
      },
      {
        id: 3,
        postedBy: user,
        title: 'My Third Post',
        message: 'This is my third post.',
        date: new Date(2020, 6, 24),
        comments: [],
        reactions: [],
      },
    ];
  }
}
