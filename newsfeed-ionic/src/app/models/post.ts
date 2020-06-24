import { IPost } from '../interfaces/ipost';
import { IUser } from '../interfaces/iuser';
import { IComment } from '../interfaces/icomment';
import { IReaction } from '../interfaces/ireaction';
import { userInfo } from 'os';
import { User } from './user';

export class Post implements IPost {
  id = 0;
  date: Date = new Date(Date.now());
  message = '';
  title = '';
  postedBy: IUser = new User();
  comments: IComment[] = [];
  reactions: IReaction[] = [];
}