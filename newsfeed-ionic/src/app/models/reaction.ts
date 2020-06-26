import { IReaction } from '../interfaces/ireaction';
import { ReactionTypes } from '../interfaces/reactionTypes';
import { IUser } from '../interfaces/iuser';
import { User } from './user';

export class Reaction implements IReaction {
  id = 0;
  date: Date = new Date(Date.now());
  reactionType: ReactionTypes = 1;
  reactedBy: IUser = new User();
}
