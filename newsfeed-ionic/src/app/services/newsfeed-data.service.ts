import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/ipost';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

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

  createId(): number {
    const ids: number[] = this.newsfeed.map((post) => {
      return post.id;
    });
    return Math.max(...ids);
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
