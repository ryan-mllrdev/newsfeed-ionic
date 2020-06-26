import { ReactionTypes } from './reactionTypes';
import { IUser } from './iuser';

export interface IReaction {
  id: number;
  date: Date;
  reactionType: ReactionTypes;
  reactedBy: IUser;
}
