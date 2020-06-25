import { ReactionTypes } from './reactionTypes';

export interface IReaction {
  id: number;
  date: Date;
  reactionType: ReactionTypes;
}
