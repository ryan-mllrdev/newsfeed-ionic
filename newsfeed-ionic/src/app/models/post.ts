import { IPost } from '../interfaces/ipost';
import { IUser } from '../interfaces/iuser';
import { IComment } from '../interfaces/icomment';
import { IReaction } from '../interfaces/ireaction';
import { User } from './user';
import { ReactionTypes } from '../interfaces/reactionTypes';

export class Post implements IPost {
  id = 0;
  date: Date = new Date(Date.now());
  message = '';
  title = '';
  postedBy: IUser = new User();
  comments: IComment[] = [];
  reactions: IReaction[] = [];
}
