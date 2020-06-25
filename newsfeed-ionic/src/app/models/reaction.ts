import { IReaction } from '../interfaces/ireaction';
import { ReactionTypes } from '../interfaces/reactionTypes';

export class Reaction implements IReaction {
  id = 0;
  date: Date = new Date(Date.now());
  reactionType: ReactionTypes = 1;
}
