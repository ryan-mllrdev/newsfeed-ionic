import { IUser } from './iuser';

export interface IComment {
  id: number;
  message: string;
  postedBy: IUser;
  date: Date;
}
