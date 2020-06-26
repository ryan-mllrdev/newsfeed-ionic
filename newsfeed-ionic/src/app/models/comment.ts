import { IComment } from '../interfaces/icomment';
import { User } from './user';
import { IUser } from '../interfaces/iuser';

export class Comment implements IComment {
  id = 0;
  message = '';
  postedBy: IUser = new User();
  date: Date = new Date(Date.now());
}
