import { IReaction } from '../interfaces/ireaction';

export class Reaction implements IReaction {
  id = 0;
  date: Date = new Date(Date.now());
  reactionType: ReactionTypes = ReactionTypes.Like;
}
