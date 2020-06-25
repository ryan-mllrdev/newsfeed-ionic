import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/ipost';
import { Observable, of, ObjectUnsubscribedError } from 'rxjs';
import { map } from 'rxjs/operators';
import { IReaction } from '../interfaces/ireaction';
import { ReactionTypes } from '../interfaces/reactionTypes';
import { IComment } from '../interfaces/icomment';

@Injectable({
  providedIn: 'platform',
})
export class NewsfeedDataService {
  baseUrl = 'assets';
  newsfeed: IPost[] = [];

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

  addReaction(postId: number, typeOfReaction: ReactionTypes = ReactionTypes.Like) {
    const post: IPost = this.findPost(postId);
    const reaction: IReaction = {
      id: 1,
      reactionType: typeOfReaction,
      date: new Date(Date.now()),
    };
    post.reactions.push(reaction);
  }

  writeComment(postId: number, commentText: string) {
    const post: IPost = this.findPost(postId);
    const comment: IComment = {
      id: 1,
      message: commentText,
      date: new Date(Date.now()),
    };
    post.comments.push(comment);
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
