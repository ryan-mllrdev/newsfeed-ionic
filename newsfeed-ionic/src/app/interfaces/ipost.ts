import { IComment } from './icomment';
import { IReaction } from './ireaction';
import { IUser } from './iuser';

export interface IPost {
  id: number;
  date: Date;
  message: string;
  title: string;
  postedBy: IUser;
  comments: IComment[];
  reactions: IReaction[];
}
