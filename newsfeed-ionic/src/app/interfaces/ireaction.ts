import { ReactionType } from '../enums/reaction-type';
import { IUser } from './iuser';

export interface IReaction {
  id: number;
  date: Date;
  reactionType: ReactionType;
  reactedBy: IUser;
}
